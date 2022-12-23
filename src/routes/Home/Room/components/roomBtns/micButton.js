import React, { useState } from "react";

const MicButton = ({ isRoomMinimized, localStream }) => {
  const [micEnabled, setMicEnabled] = useState(true);

  const handleToggleMic = () => {
    localStream.getAudioTracks()[0].enabled = !micEnabled;

    setMicEnabled(!micEnabled);
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
        onClick={handleToggleMic}
      >
        {micEnabled ? (
          <i className="fa-solid fa-microphone-slash"></i>
        ) : (
          <i className="fa-solid fa-microphone"></i>
        )}
      </div>
    </div>
  );
};

export default MicButton;
