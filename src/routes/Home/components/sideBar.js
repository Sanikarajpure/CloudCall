import React from "react";
import { useSelector } from "react-redux";
import MainPageButton from "./mainPageButton";
import CreateRoomButton from "./createRoomButton";
import ActiveRoomButton from "./activeRoomButton";

const SideBar = () => {
  const rooms = useSelector((state) =>
    state.Room.activeRooms ? state.Room : ""
  );
  const activeRooms = useSelector((state) => state.Room.activeRooms);

  return (
    <div
      className="sideBarBlock
   dark:bg-dark-bg
   bg-light-grey-end
    flex md:flex-col items-center
     w-full md:h-screen md:w-[72px]"
    >
      <MainPageButton />
      <CreateRoomButton />
      {activeRooms.map((room) =>
        room.participants.length > 3 ? (
          ""
        ) : (
          <ActiveRoomButton
            roomId={room.roomId}
            creatorUsername={room.creatorUsername}
            amountOfParticipants={room.participants.length}
            key={room.roomId}
            isUserInRoom={rooms.isUserInRoom}
          />
        )
      )}
    </div>
  );
};

export default SideBar;
