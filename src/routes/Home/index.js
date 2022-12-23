import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import AppBar from "./components/appBar";
import SideBar from "./components/sideBar";
import FirendsSideBar from "./components/friendsSideBar";
import Messenger from "./components/messenger";
import Room from "./Room/room";
import { useNavigate } from "react-router-dom";
import { connectWithSocketServer } from "../../Utilities/socket";

const Home = () => {
  const navigate = useNavigate();

  const user = useSelector((state) =>
    state.User.user_verification.user.firstName
      ? state.User.user_verification.user
      : ""
  );

  const room = useSelector((state) => (state.Room ? state.Room : ""));

  useEffect(() => {
    const init = async () => {
      if (!user) {
        //
      } else {
        connectWithSocketServer(user);
      }
    };
    init();
  }, [navigate, user]);

  return (
    <div className="homeContainer md:flex md:flex-row flex flex-col-reverse">
      <div className="left  md:flex  ">
        <SideBar /> <FirendsSideBar />
      </div>
      <div className="right">
        <div className="messengerContainer">
          <Messenger />
        </div>
        <div className="appBarContainer">
          <AppBar />
        </div>
        {room.isUserInRoom && <Room />}
      </div>
    </div>
  );
};

export default Home;
