import React, { useEffect, useState, useRef, useCallback } from "react";
import VideoFrame from "./components/videoFrame";
import { initSocket } from "../../Utilities/socket";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { usePeer } from "../../Utilities/peer";
import ACTIONS from "../../Utilities/userSocketActions";

const Room = () => {
  const [myStream, setMyStream] = useState(null);
  const [remoteUser, setRemoteUser] = useState(null);
  const [cameraOn, setCameraOn] = useState(false);
  const navigate = useNavigate();
  const socketRef = useRef(null);
  const {
    peer,
    createOffer,
    createAnswer,
    setRemoteAnswer,
    sendStream,
    remoteStream,
  } = usePeer();
  const user = useSelector((state) =>
    state.User.loginInfo.user.firstName ? state.User.loginInfo.user : "sanika"
  );
  const { roomId } = useParams();

  const getUserMediaStream = useCallback(async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    });
    setMyStream(stream);
  }, []);

  useEffect(() => {
    const init = async () => {
      socketRef.current = await initSocket();
      socketRef.current.on("connect_error", (err) => handleErrors(err));
      socketRef.current.on("connect_failed", (err) => handleErrors(err));

      function handleErrors(e) {
        toast.error("Socket connection failed, try again later.");
        navigate("/");
      }

      socketRef.current.emit(ACTIONS.JOIN, {
        roomId,
        userName: user.firstName,
      });

      // Listening for joined event
      socketRef.current.on(ACTIONS.JOINED, async ({ userName }) => {
        console.log(userName);
        if (userName !== user.firstName) {
          toast.success(`${userName} joined the room.`);
        }
        //create offer
        const offer = await createOffer();
        //syncing stream
        socketRef.current.emit(ACTIONS.CALL_USER, {
          userName,
          offer,
        });
        setRemoteUser(userName);
      });

      // Listening for incomming call event
      socketRef.current.on(ACTIONS.INCOMMING_CALL, async ({ from, offer }) => {
        const ans = await createAnswer(offer);
        console.log("incomming call");
        socketRef.current.emit(ACTIONS.ACCEPT_CALL, { userName: from, ans });
        setRemoteUser(from);
      });

      // Listening for accept call event
      socketRef.current.on(ACTIONS.ACCEPT_CALL, async ({ ans }) => {
        console.log("call accepted");
        await setRemoteAnswer(ans);
      });

      //Listening for disconnected event
      socketRef.current.on(ACTIONS.DISCONNECTED, ({ socketId, userName }) => {
        toast(`${userName} left the room.`, { icon: "🏃" });
      });
    };
    init();
    return () => {
      socketRef.current.disconnect();
      socketRef.current.off(ACTIONS.JOINED);
      socketRef.current.off(ACTIONS.INCOMMING_CALL);
      socketRef.current.off(ACTIONS.ACCEPT_CALL);
      socketRef.current.off(ACTIONS.DISCONNECTED);
    };
  }, [
    createAnswer,
    createOffer,
    myStream,
    navigate,
    roomId,
    setRemoteAnswer,
    user.firstName,
  ]);

  const handleNegotiationNeeded = useCallback((event) => {
    console.log("negotiation needed!");
    const localOffer = peer.localDescription;
    socketRef.current.emit(ACTIONS.CALL_USER, {
      userName: remoteUser,
      offer: localOffer,
    });
  });

  useEffect(() => {
    peer.addEventListener("negotiationneeded", handleNegotiationNeeded);
    return () => {
      peer.removeEventListener("negotiationneeded", handleNegotiationNeeded);
    };
  }, [handleNegotiationNeeded, peer]);

  useEffect(() => {
    getUserMediaStream();
  }, [getUserMediaStream]);

  return (
    <div>
      <div>
        <VideoFrame
          stream={myStream}
          userName={user.firstName}
          remoteStreams={remoteStream}
          remoteUser={remoteUser}
        />
      </div>

      <div
        className="bg-green"
        onClick={() => {
          console.log("btn clicked");
          setCameraOn((prev) => !prev);
          sendStream(myStream);
        }}
      >
        {cameraOn ? (
          <>
            <i class="fa-solid fa-video"></i>
          </>
        ) : (
          <>
            <i class="fa-solid fa-video"></i>
          </>
        )}
      </div>
    </div>
  );
};

export default Room;
