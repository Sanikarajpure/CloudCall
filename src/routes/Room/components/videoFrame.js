import React from "react";
import ReactPlayer from "react-player";

const VideoFrame = ({ stream, userName, remoteStreams, remoteUser }) => {
  return (
    <div>
      {" "}
      <div>you are connected to {remoteUser}</div>
      {userName}
      <div>
        <ReactPlayer url={stream} playing muted />
        {remoteStreams ? (
          <>
            <ReactPlayer url={remoteStreams} playing muted />
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default VideoFrame;
