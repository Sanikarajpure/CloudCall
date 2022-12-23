import React from "react";
import { useSelector } from "react-redux";
import VideoItem from "./videoItem";

const VideoContainer = () => {
  const room = useSelector((state) =>
    state.Room.isUserInRoom ? state.Room : ""
  );
  const remoteStream = useSelector((state) =>
    state.Room.isUserInRoom ? state.Room.remoteStreams : ""
  );
  const screenShareStream = useSelector((state) =>
    state.Room.isUserInRoom ? state.Room.screenSharingStream : ""
  );
  const friends = useSelector((state) =>
    state.Friends ? state.Friends.friends : ""
  );

  const getUserName = (socketId) => {
    let roomId = room.roomDetails.roomId;
    let activeRooms = room.activeRooms;
    let participants = [];
    let username = "";
    let userId = null;

    activeRooms.map((room) => {
      if (room.roomId === roomId) {
        participants = room.participants;
      }
    });
    participants.map((participant) => {
      if (participant.socketId === socketId) {
        userId = participant.userId;
      }
    });
    friends.map((friend) => {
      if (friend.id === userId) {
        username = friend.firstName + " " + friend.lastName;
      }
    });

    return username;
  };

  return (
    <div
      className="
  h-5/6
  w-full
  flex flex-wrap
justify-evenly

  "
    >
      <VideoItem
        stream={screenShareStream ? screenShareStream : room.localStream}
        isLocalStream
        username="Me"
      />

      {remoteStream.map((stream, index) => (
        <VideoItem
          key={index}
          stream={stream}
          username={getUserName(stream.connUserSocketId)}
        />
      ))}
    </div>
  );
};

export default VideoContainer;
