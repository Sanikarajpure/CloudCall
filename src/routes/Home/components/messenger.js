import React from "react";
import MessengerContent from "./messengerContent";
import WelcomeMessage from "./welcomeMessage";
import { useSelector } from "react-redux";
const Messenger = () => {
  const chat = useSelector((state) =>
    state.Chat.chosenChatDetails.id ? state.Chat.chosenChatDetails : ""
  );
  return (
    <div
      className="messengerBlock 
    flex grow
    mt-12
    dark:border-dark-bg
    bg-light-accent
    dark:bg-dark-sec
     md:w-[calc(100vw-296px)]
     min-h-[calc(100vh-12vh)]
     md:min-h-[calc(100vh-48px)]
     
     "
    >
      {!chat ? <WelcomeMessage /> : <MessengerContent chatDetails={chat} />}
    </div>
  );
};

export default Messenger;
