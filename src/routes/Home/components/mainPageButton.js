import React from "react";

const MainPageButton = ({ Title }) => {
  return (
    <div
      className="flex 
    w-fit h-fit border-r-dark-sec
    p-2 text-xl
    md:text-2xl
    bg-light-call-sec
    text-light-bg
    dark:text-light-call-sec
    dark:bg-dark-accent
    rounded-md
    md:mt-1
    m-1
    cursor-pointer
    "
    >
      <div>
        <i className="fa-solid fa-people-group"></i>
      </div>
    </div>
  );
};

export default MainPageButton;
