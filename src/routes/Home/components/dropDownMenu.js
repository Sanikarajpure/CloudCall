import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVertTwoTone";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { userSignOut } from "../../Login/loginAction";
import { set_audio_only } from "../../../Actions/roomActions";
import { signout_user } from "../../../Actions/userActions";

const DropDownMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const room = useSelector((state) => (state.Room ? state.Room : ""));
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    console.log("btn clicked");
    userSignOut();
    dispatch(signout_user());
    navigate("/");
  };

  const handleAudioOnlyChange = () => {
    dispatch(set_audio_only(!room.audioOnly));
  };

  return (
    <div>
      <IconButton className="cursor-pointer" onClick={handleMenuOpen}>
        <MoreVertIcon className="text-dark-accent dark:text-light-accent cursor-pointer" />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {!room.isUserInRoom ? (
          <MenuItem onClick={handleAudioOnlyChange}>
            {room.audioOnly ? "Disable Audio Only" : "Enable Audio Only"}
          </MenuItem>
        ) : (
          ""
        )}

        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default DropDownMenu;
