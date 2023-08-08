import React, { useState } from "react";
import { Tooltip, Box } from "@mui/material";
import Member from "../../../Utilities/member";
import toast from "react-hot-toast";
import InvitationDecisionButtons from "./invitationDecisionButtons";
import {
  acceptFriendInvitation,
  rejectFriendInvitation,
} from "../friendActions";
const PendingInvitationListItem = ({ id, username, mail }) => {
  const [buttonDisables, setButtonDisabled] = useState(false);

  const HandleAcceptInvitation = async () => {
    try {
      let response = await acceptFriendInvitation({ id });
      console.log(response);
      if (response.data) {
        toast.success(`Invitation accepted!`);
        setButtonDisabled(true);
      }
    } catch (err) {
      if (err.response.data) {
        toast.error(err.response.data);
      } else {
        toast.error("Something went wrong please try again");
      }
    }
  };

  const HandleRejectInvitation = async () => {
    try {
      let response = await rejectFriendInvitation({ id });
      console.log(response);
      if (response.data) {
        toast.success(`Invitation is rejected`);
        setButtonDisabled(true);
      }
    } catch (err) {
      if (err.response.data) {
        toast.error(err.response.data);
      } else {
        toast.error("Something went wrong please try again");
      }
    }
  };

  return (
    <Tooltip title={mail}>
      <div
        className="w-full first-letter:  h-8 my-1 flex
    items-center justify-between
    hover:bg-light-accent
    text-dark-bg
    hover:dark:bg-dark-bg
    dark:text-light-accent
     px-2 rounded-md"
      >
        <Box>
          <Member firstName={username} size={35} flexprop={"flex-row"} />
        </Box>
        <InvitationDecisionButtons
          disabled={buttonDisables}
          acceptInvitationHandler={HandleAcceptInvitation}
          rejectInvitationHandler={HandleRejectInvitation}
        />
      </div>
    </Tooltip>
  );
};

export default PendingInvitationListItem;
