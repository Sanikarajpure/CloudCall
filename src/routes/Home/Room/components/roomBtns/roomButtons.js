import React from "react";
import { useSelector } from "react-redux";
import ScreenShareButton from "./screenShareButton";
import CloseRoomButton from "./closeRoomButton";
import MicButton from "./micButton";
import CameraButton from "./cameraButton";

const RoomButtons = ({ isRoomMinimized }) => {
  const room = useSelector((state) =>
    state.Room.isUserInRoom ? state.Room : ""
  );
  return (
    <div
      className="
      h-1/6
  w-full
  border-t-[3px]
  border-light-call-sec
  rounded-t-md
  flex items-center justify-center
  "
    >
      <div
        className={` 
       ${
         isRoomMinimized
           ? "flex w-4/6 h-full justify-evenly items-center"
           : "md:w-2/5 flex  justify-evenly"
       }
       `}
      >
        {!room.audioOnly ? (
          <ScreenShareButton
            isRoomMinimized={isRoomMinimized}
            localStream={room.localStream}
            screenSharingStream={room.screenSharingStream}
            isScreenSharingActive={room.isScreenSharingActive}
          />
        ) : (
          ""
        )}

        <MicButton
          isRoomMinimized={isRoomMinimized}
          localStream={room.localStream}
        />
        <CloseRoomButton isRoomMinimized={isRoomMinimized} />
        {!room.audioOnly ? (
          <CameraButton
            isRoomMinimized={isRoomMinimized}
            localStream={room.localStream}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default RoomButtons;
