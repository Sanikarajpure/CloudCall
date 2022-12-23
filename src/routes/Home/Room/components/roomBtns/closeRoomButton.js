import React from "react";
import "../../../components/dashboard.css";
import toast from "react-hot-toast";
import * as roomHandler from "../../../../../Utilities/roomHandler";

const CloseRoomButton = ({ isRoomMinimized }) => {
  const handleCloseRoom = () => {
    roomHandler.leaveRoom();
    toast.success("Left Room!");
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
            ? "w-10 px-3.5 py-3  text-md"
            : " w-12  px-5 py-3 text-2xl "
        }
        flex
      justify-center
      text-light-bg
      bg-dark-red
        rounded-full
        cursor-pointer
        `}
        onClick={handleCloseRoom}
      >
        <i class="fa-solid fa-xmark"></i>
      </div>
    </div>
  );
};

export default CloseRoomButton;
