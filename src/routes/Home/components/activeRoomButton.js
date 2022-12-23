import { Tooltip } from "@mui/material";
import React from "react";
import toast from "react-hot-toast";
import Member from "../../../Utilities/member";
import * as roomhandler from "../../../Utilities/roomHandler";

const ActiveRoomButton = ({
  creatorUsername,
  roomId,
  amountOfParticipants,
  isUserInRoom,
}) => {
  const handleJoinActiveRoom = () => {
    if (!isUserInRoom) {
      if (amountOfParticipants < 4) {
        roomhandler.joinRoom(roomId);
        toast.success("Joined Room!");
      }
    } else {
      toast.error("You're already in a room, exit it to join another");
    }
  };
  console.log(creatorUsername);

  const roomTitle = `Creator: ${creatorUsername}   Participants: ${amountOfParticipants}`;

  return (
    <Tooltip title={roomTitle}>
      <div>
        <div onClick={handleJoinActiveRoom} className="m-1">
          <Member
            firstName={creatorUsername}
            size={40}
            flexprop={"flex-row"}
            textprop={"text-md"}
            isName={false}
          />
        </div>
      </div>
    </Tooltip>
  );
};

export default ActiveRoomButton;
