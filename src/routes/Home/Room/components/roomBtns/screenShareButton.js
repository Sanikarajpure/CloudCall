import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { set_screen_share_stream } from "../../../../../Actions/roomActions";
import * as webRTCHandler from "../../../../../Utilities/webRTChandler";

const constraints = {
  audio: false,
  video: true,
};

const ScreenShareButton = ({
  isRoomMinimized,
  localStream,
  screenSharingStream,
  isScreenSharingActive,
}) => {
  const dispatch = useDispatch();

  const handleScreenShare = async () => {
    if (!isScreenSharingActive) {
      let stream = null;

      try {
        stream = await navigator.mediaDevices.getDisplayMedia(constraints);
      } catch (err) {
        console.log("Error occured while screen share");
      }

      if (stream) {
        dispatch(set_screen_share_stream(stream));
        webRTCHandler.switchOutgoingTracks(stream);
      }
    } else {
      webRTCHandler.switchOutgoingTracks(localStream);
      screenSharingStream.getTracks().forEach((t) => t.stop());
      dispatch(set_screen_share_stream(null));
    }
  };
  return (
    <div
      className={` 
    ${isRoomMinimized ? "bottom-1  right-2 " : "bottom-8 right-6"}
    `}
    >
      <div
        className={`
        resizeRoomButton
       
        ${
          isRoomMinimized
            ? "w-10 px-3.5 py-3 text-md"
            : " w-12  px-5 py-3 text-2xl "
        }
        flex
      justify-center
        bg-light-call-sec
        text-light-bg
        dark:text-light-call-sec
        dark:bg-dark-accent
        rounded-full
        cursor-pointer
        `}
        onClick={handleScreenShare}
      >
        {isScreenSharingActive ? (
          <i class="fa-solid fa-stop"></i>
        ) : (
          <i className="fa-solid fa-arrow-up-right-from-square"></i>
        )}
      </div>
    </div>
  );
};

export default ScreenShareButton;
