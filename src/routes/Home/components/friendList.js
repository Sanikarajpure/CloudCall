import React from "react";
import FriendListItem from "./friendListItem";
import { useSelector } from "react-redux";
const DUMMY_FRNDS = [
  {
    id: 1,
    username: "Mark",
    isOnline: true,
  },
  {
    id: 2,
    username: "Sam",
    isOnline: true,
  },
  {
    id: 3,
    username: "Julie",
    isOnline: true,
  },
  {
    id: 4,
    username: "Raj",
    isOnline: false,
  },
];

const checkOnlineUsers = (friendsList = [], OnlinefriendsList = []) => {
  friendsList.forEach((f) => {
    const isUserOnline = OnlinefriendsList.find((user) => user.userId === f.id);
    f.isOnline = isUserOnline ? true : false;
  });

  return friendsList;
};

const FriendList = () => {
  const friendsList = useSelector((state) =>
    state.Friends.friends ? state.Friends.friends : []
  );

  const OnlinefriendsList = useSelector((state) =>
    state.Friends.onlineUsers ? state.Friends.onlineUsers : []
  );
  return (
    <div
      className="
  grow
  w-full
  "
    >
      {checkOnlineUsers(friendsList, OnlinefriendsList).map((f) => (
        <FriendListItem
          key={f.id}
          id={f.id}
          firstName={f.firstName}
          lastName={f.lastName}
          isOnline={f.isOnline}
        />
      ))}
    </div>
  );
};

export default FriendList;
