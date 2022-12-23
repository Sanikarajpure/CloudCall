import React, { useState } from "react";
import AddFriendDialog from "./addFriendDialog";

const AddFriendButton = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const handleOpenAddFriendDialog = () => {
    setIsDialogOpen(true);
  };
  const handleCloseAddFriendDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      <div
        className="
  my-2 md:mt-2 w-4/5 h-fit py-1
  bg-green-bg text-center items-center
  rounded-md text-light-bg font-medium
  cursor-pointer
  "
        onClick={() => {
          handleOpenAddFriendDialog();
        }}
      >
        {" "}
        Add Friend
      </div>

      <AddFriendDialog
        isDialogOpen={isDialogOpen}
        closeDialogHandler={handleCloseAddFriendDialog}
      />
    </>
  );
};

export default AddFriendButton;
