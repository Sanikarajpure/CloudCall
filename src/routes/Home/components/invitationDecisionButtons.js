import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import { Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
const InvitationDecisionButtons = ({
  disabled,
  acceptInvitationHandler,
  rejectInvitationHandler,
}) => {
  return (
    <Box className="flex">
      <IconButton
        className={"cursor-pointer "}
        disabled={disabled}
        onClick={acceptInvitationHandler}
      >
        <CheckIcon className="text-dark-accent  dark:text-light-accent  " />
      </IconButton>
      <IconButton
        className={"cursor-pointer "}
        disabled={disabled}
        onClick={rejectInvitationHandler}
      >
        <ClearIcon className="text-dark-accent dark:text-light-accent  " />
      </IconButton>
    </Box>
  );
};

export default InvitationDecisionButtons;
