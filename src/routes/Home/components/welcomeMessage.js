import React from "react";

const WelcomeMessage = () => {
  return (
    <div
      className="
  flex grow 
  min-h-[calc(100vh-12vh)]
  md:min-h-[calc(100vh-48px)]
  items-center justify-center
  font-bold text-md
  text-dark-accent
  dark:text-light-accent
  "
    >
      To start chatting - choose a conversation
    </div>
  );
};

export default WelcomeMessage;
