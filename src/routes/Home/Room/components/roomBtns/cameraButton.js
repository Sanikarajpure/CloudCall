import React, { useState } from "react";

const CameraButton = ({ isRoomMinimized, localStream }) => {
  const [cameraEnabled, setCameraEnabled] = useState(true);

  const handleToggleCamera = () => {
    localStream.getVideoTracks()[0].enabled = !cameraEnabled;
    setCameraEnabled(!cameraEnabled);
  };

  console.log(cameraEnabled);

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
       bg-light-call-sec
       text-light-bg
       dark:text-light-call-sec
       dark:bg-dark-accent
       rounded-full
       cursor-pointer
       `}
        onClick={handleToggleCamera}
      >
        {cameraEnabled ? (
          <i class="fa-solid fa-video-slash"></i>
        ) : (
          <i class="fa-solid fa-video"></i>
        )}
      </div>
    </div>
  );
};

export default CameraButton;
