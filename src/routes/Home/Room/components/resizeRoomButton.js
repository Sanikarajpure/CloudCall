import React from "react";

import "../../components/dashboard.css";

const ResizeRoomButton = ({ isRoomMinimized, handleRoomResize }) => {
  return (
    <div
      className={`absolute
      ${isRoomMinimized ? "bottom-1  right-2 " : "bottom-8 right-6"}
      `}
    >
      <div
        className={`
        resizeRoomButton
        ${isRoomMinimized ? " px-3 py-2 text-md" : " px-4 py-3 text-xl "}
      
        bg-light-call-sec
        text-light-bg
        dark:text-light-call-sec
        dark:bg-dark-accent
        rounded-full
        cursor-pointer
        `}
        onClick={handleRoomResize}
      >
        {isRoomMinimized ? (
          <i className="fa-solid fa-up-right-and-down-left-from-center"></i>
        ) : (
          <i className="fa-solid fa-down-left-and-up-right-to-center"></i>
        )}
      </div>
    </div>
  );
};

export default ResizeRoomButton;
