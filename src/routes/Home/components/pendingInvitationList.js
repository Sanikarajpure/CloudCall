import React from "react";
import PendingInvitationListItem from "./pendingInvitationListItem";
import { useSelector } from "react-redux";

const DUMMY_INVITATIONS = [
  {
    _id: "1",
    senderId: {
      username: "Mark",
      mail: "dummy@inviation.com",
    },
  },
  {
    _id: "2",
    senderId: {
      username: "Olivia",
      mail: "dummy@inviation.com",
    },
  },
  {
    _id: "3",
    senderId: {
      username: "Jane",
      mail: "dummy@inviation.com",
    },
  },
];

const PendingInvitationList = () => {
  const pendingInvitations = useSelector((state) =>
    state.Friends.pendingFriendInvitations
      ? state.Friends.pendingFriendInvitations
      : []
  );
  return (
    <div
      className="
  flex
  flex-col
  w-full
  h-1/4
  items-center
  overflow-auto
  "
    >
      {pendingInvitations.map((i) => (
        <PendingInvitationListItem
          key={i._id}
          id={i._id}
          username={i.senderId.firstName}
          mail={i.senderId.email}
        />
      ))}
    </div>
  );
};

export default PendingInvitationList;
