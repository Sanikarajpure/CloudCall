import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Messages from "./messages";
import NewMessagesInput from "./newMessageInput";
import { getDirectChatHistory } from "../../../Utilities/socket";

const MessengerContent = ({ chatDetails }) => {
  const chat = useSelector((state) =>
    state.Chat.chosenChatDetails ? state.Chat.chosenChatDetails : ""
  );
  useEffect(() => {
    getDirectChatHistory({ receiverUserId: chat.id });
  }, [chat]);

  return (
    <div
      className="
      w-full
     
  "
    >
      <Messages />
      <NewMessagesInput />
    </div>
  );
};

export default MessengerContent;
