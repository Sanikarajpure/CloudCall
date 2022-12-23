import React from "react";
import DropDownMenu from "./dropDownMenu";
import ChosenOptionLabel from "./chosenOptionLabel";
const AppBar = () => {
  return (
    <div
      className="appBarBlock 
      absolute right-0 top-0  h-12
      border-b-[3px] border-light-grey-end
       dark:border-dark-bg
       bg-light-accent
              dark:bg-dark-sec
       w-full
       md:w-[calc(100vw-296px)]
       flex items-center justify-between
       p-2
  "
    >
      <ChosenOptionLabel />
      <DropDownMenu />
    </div>
  );
};

export default AppBar;
