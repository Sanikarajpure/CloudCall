import React, { useState } from "react";
import ResizeRoomButton from "./components/resizeRoomButton";
import RoomButtons from "./components/roomBtns/roomButtons";
import VideoContainer from "./components/videoContainer";
import { styled } from "@mui/system";

const MainContainer = styled("div")({
  position: "absolute",
  borderRadius: "8px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

const fullScreenRoomStyle = {
  width: "100%",
  height: "100vh",
  top: "0px",
  left: "0px",
  borderRadius: "0px",
};

const minimizedRoomStyle = {
  bottom: "0px",
  right: "0px",
  width: "30%",
  height: "40vh",
};

const Room = () => {
  const [isRoomMinimized, setIsRoomMinimized] = useState(true);

  const roomResizeHandler = () => {
    setIsRoomMinimized(!isRoomMinimized);
  };

  return (
    <MainContainer
      className="
    dark:bg-dark-bg
   bg-light-grey-end"
      style={isRoomMinimized ? minimizedRoomStyle : fullScreenRoomStyle}
    >
      <VideoContainer />
      <RoomButtons isRoomMinimized={isRoomMinimized} />
      <ResizeRoomButton
        isRoomMinimized={isRoomMinimized}
        handleRoomResize={roomResizeHandler}
      />
    </MainContainer>
  );
};

export default Room;
