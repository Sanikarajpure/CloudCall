import React from "react";
import * as roomHandler from "../../../Utilities/roomHandler";
import toast from "react-hot-toast";
import { useSelector } from "react-redux/es/exports";
import "./dashboard.css";
const CreateRoomButton = () => {
  const room = useSelector((state) => (state.Room ? state.Room : ""));
  const createNewRoomHandler = () => {
    //creating new room and sending info to server
    if (!room.isUserInRoom) {
      roomHandler.createNewRoom();
      toast.success("Room Created!");
    } else {
      toast.error("You're already in a room");
    }
  };
  return (
    <div
      className="
      createRoomButton
      flex 
w-fit h-fit border-r-dark-sec
 text-xl px-3 py-2
md:text-2xl
bg-light-call-sec
text-light-bg
dark:text-light-call-sec
dark:bg-dark-accent

rounded-md

md:mt-1
m-1
cursor-pointer
"
      onClick={createNewRoomHandler}
    >
      <div>
        <i className="fa-solid fa-plus"></i>
      </div>
    </div>
  );
};

export default CreateRoomButton;
