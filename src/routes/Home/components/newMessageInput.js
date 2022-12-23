import React, { useState } from "react";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { encode as base64_encode } from "base-64";
import { sendDirectMessage } from "../../../Utilities/socket";

const NewMessageInput = () => {
  const [message, setMessage] = useState("");
  const chat = useSelector((state) =>
    state.Chat.chosenChatDetails ? state.Chat.chosenChatDetails : ""
  );
  const handleMessageValueChange = (event) => {
    setMessage(event.target.value);
  };

  const handleKeyPressed = (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  const handleSendMessage = () => {
    function onlySpaces(str) {
      return str.trim().length === 0;
    }
    let result = onlySpaces(message);
    if (message.length > 0) {
      if (!result) {
        sendDirectMessage({
          receiverUserId: chat.id,
          content: base64_encode(message),
        });
        setMessage("");
      } else {
        toast.error("Type something to send a message");
      }
    } else {
      toast.error("Type something to send a message");
    }
  };

  return (
    <div className=" h-8 w-full flex items-center justify-center">
      <input
        className="w-full h-full m-4
        bg-light-grey-end
        dark:bg-dark-bg
        text-dark-accent
      dark:text-light-accent
        font-semibold text-md
        outline-none rounded-full text-md px-4"
        type="text"
        placeholder={`Write message to ${chat.name}`}
        value={message}
        onChange={handleMessageValueChange}
        onKeyDown={handleKeyPressed}
      ></input>
    </div>
  );
};

export default NewMessageInput;
