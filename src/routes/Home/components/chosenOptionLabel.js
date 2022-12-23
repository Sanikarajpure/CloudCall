import React from "react";
import { useSelector } from "react-redux";

const ChosenOptionLabel = () => {
  const chatName = useSelector((state) =>
    state.Chat.chosenChatDetails ? state.Chat.chosenChatDetails.name : ""
  );
  return (
    <div
      className="
   font-bold text-md
   text-dark-accent
   dark:text-light-accent
   "
    >{`${chatName ? `In Coversation with: ${chatName} ` : ""}`}</div>
  );
};

export default ChosenOptionLabel;
