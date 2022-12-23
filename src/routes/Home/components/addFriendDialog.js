import React, { useState, useEffect } from "react";
import { validateMail } from "../../../Utilities/validators";
import toast from "react-hot-toast";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";
import InputWithLabel from "../../../Utilities/InputWithLabel";
import CustomPrimaryButton from "../../../Utilities/CustomPrimaryButton";
import { useDispatch, useSelector } from "react-redux";
import { sendFriendInvitation } from "../friendActions";

const AddFriendDialog = ({ isDialogOpen, closeDialogHandler }) => {
  const [mail, setMail] = useState("");
  const [isFormValid, setIsFormValid] = useState();
  const user = useSelector((state) =>
    state.User.user_verification.user.firstName
      ? state.User.user_verification.user
      : ""
  );

  useEffect(() => {
    setIsFormValid(validateMail(mail));
  }, [mail, setIsFormValid]);

  const handleCloseDialog = () => {
    closeDialogHandler();
    setMail("");
  };

  const handleSendInvitation = async () => {
    if (user) {
      try {
        let response = await sendFriendInvitation({
          targetMailAddress: mail,
          senderMailAddress: user.email,
        });
        if (response.data) {
          toast.success(`Invitation has been sent!`);
          handleCloseDialog();
        }
      } catch (err) {
        if (err.response.data) {
          toast.error(err.response.data);
        } else {
          toast.error("Something went wrong please try again");
        }
      }
    }
  };

  return (
    <div>
      <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>
          <Typography>Invite a Friend</Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography>
              Enter e-mail address of friend which you would like to invite
            </Typography>{" "}
          </DialogContentText>
          <InputWithLabel
            label="Mail"
            type="text"
            value={mail}
            setValue={setMail}
            placeholder="Enter email address"
          />
        </DialogContent>
        <DialogActions>
          <CustomPrimaryButton
            onClick={handleSendInvitation}
            disabled={!isFormValid}
            label="Send"
            additionalStyles={{ marginLeft: "5%", marginRight: "5%" }}
          />
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddFriendDialog;
