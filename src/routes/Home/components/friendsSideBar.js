import React from "react";
import AddFriendButton from "./addFriendButton";
import FriendsTitle from "./friendsTitle";
import FriendList from "./friendList";
import PendingInvitationList from "./pendingInvitationList";

const FriendsSideBar = () => {
  return (
    <div
      className="friendsSideBarBlock 
    flex flex-col items-center
     dark:bg-dark-accent 
     bg-light-grey-start
    w-full m-h-screen md:w-[224px]"
    >
      <AddFriendButton />
      <FriendsTitle title={"Private Messages"} />
      <FriendList />
      <FriendsTitle title={"Invitations"} />
      <PendingInvitationList />
    </div>
  );
};

export default FriendsSideBar;
