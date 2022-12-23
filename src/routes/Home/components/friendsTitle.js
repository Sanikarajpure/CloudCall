import React from "react";

const FriendsTitle = ({ title }) => {
  return (
    <div
      className="uppercase
   text-sm mt-1 font-semibold
   text-dark-accent
   dark:text-light-accent"
    >
      {title}
    </div>
  );
};

export default FriendsTitle;
