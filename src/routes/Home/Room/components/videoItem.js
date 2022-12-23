import React, { useEffect, useRef } from "react";

const VideoItem = ({ stream, isLocalStream, username }) => {
  const videoRef = useRef();

  useEffect(() => {
    const video = videoRef.current;
    video.srcObject = stream;

    video.onloadedmetadata = () => {
      video.play();
    };
  }, [stream]);

  return (
    <div className="h-2/4 w-2/5  bg-dark-black ">
      {stream ? (
        <video
          className="w-full h-full rounded"
          ref={videoRef}
          autoPlay
          muted={isLocalStream ? true : false}
        />
      ) : (
        <div className="h-full w-full rounded bg-dark-bg">
          <i class="fa-solid fa-camera-slash"></i>
        </div>
      )}

      <p className="relative -top-5 left-1 text-light-bg text-xs">{username}</p>
    </div>
  );
};

export default VideoItem;
