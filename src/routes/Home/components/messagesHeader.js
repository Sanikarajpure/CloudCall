import React from "react";
import Member from "../../../Utilities/member";
const MessagesHeader = ({ name }) => {
  return (
    <div
      className="
    
 
    w-full
    p-2
    "
    >
      <Member
        firstName={name}
        size={60}
        flexprop={"flex-col"}
        textprop={"text-2xl"}
      />

      <div
        className="  flex justify-center items-center 
   text-xs
  text-dark-accent
  dark:text-light-accent"
      >
        - This is the beginning of your conversation with {name} -
      </div>
    </div>
  );
};

export default MessagesHeader;
