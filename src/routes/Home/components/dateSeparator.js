import React from "react";

const DateSeparator = ({ date }) => {
  return (
    <div
      className="
  h-0.5
  relative my-2
  bg-text-dark-bg
  mt-2
  mb-1
  bg-light-grey-end
  dark:bg-dark-bg
  dark:text-dark-bg text-light-grey-end
 
  "
    >
      <div
        className="
      absolute 
      right-2/4
      font-bold
      -top-3 text-md
      bg-light-accent
    dark:bg-dark-sec
    px-4
      
      "
      >
        {date}
      </div>
    </div>
  );
};

export default DateSeparator;
