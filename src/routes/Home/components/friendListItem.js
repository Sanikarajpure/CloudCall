import React from "react";
import Member from "../../../Utilities/member";
import OnlineIndicator from "./onlineIndicator";
import { useDispatch } from "react-redux";
import { set_chosen_chat_details } from "../../../Actions/chatAtions";
import { chatTypes } from "../../../Actions/chatAtions";

const FriendListItem = ({ id, isOnline, firstName, lastName }) => {
  const dispatch = useDispatch();
  const handleChooseActiveConversation = () => {
    dispatch(
      set_chosen_chat_details(
        {
          id: id,
          name: firstName + " " + lastName,
        },
        chatTypes.DIRECT
      )
    );
  };

  return (
    <div
      className="
      h-8 m-1 flex
      items-center justify-between
      hover:bg-light-accent
      text-dark-bg
      hover:dark:bg-dark-bg
      dark:text-light-accent
      px-2 rounded-md
      cursor-pointer
    "
      onClick={handleChooseActiveConversation}
    >
      <Member
        firstName={firstName}
        lastName={lastName}
        size={30}
        flexprop={"flex-row"}
        textprop={"text-sm"}
      />

      <div>
        {isOnline ? (
          <OnlineIndicator />
        ) : (
          <span className="text-xs ">Offline</span>
        )}
      </div>
    </div>
  );
};

export default FriendListItem;
