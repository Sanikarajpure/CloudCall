import React from "react";
import Avatar from "react-avatar";

const Member = ({
  firstName,
  lastName,
  size,
  flexprop,
  textprop,
  isName = true,
}) => {
  return (
    <div
      className={`memberWrapper items-center flex ${flexprop} w-fit justify-between  `}
    >
      {lastName ? (
        <Avatar name={firstName + " " + lastName} size={size} round={true} />
      ) : (
        <Avatar name={firstName} size={size} round={true} />
      )}

      {isName ? (
        <div
          className={`userNameBlock ${textprop} text-center px-2 font-semibold
           dark:text-light-accent`}
        >
          {firstName}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Member;
