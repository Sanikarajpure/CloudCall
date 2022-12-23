import { io } from "socket.io-client";
import { getTokenCookie } from "./authTools";
import store from "../store";
import ACTIONS from "./userSocketActions";
import { updateDirectChatHistoryIfActive } from "./chatHelp";
import * as roomHandler from "./roomHandler";
import * as webRTCHandler from "./webRTChandler";
import {
  set_pending_friend_invitations,
  set_friends,
  set_online_users,
} from "../Actions/friendsAction";
const L_URL = "http://localhost:3002";
const P_URL = "https://offdutyninjas.site";

let socket = null;
export const connectWithSocketServer = async (user, chat) => {
  const token = getTokenCookie();
  const options = {
    "force new connection": true,
    reconnectionAttempt: "Infinity",
    timeout: 10000,
    transports: ["websocket"],
    auth: {
      token: token,
    },
  };
  socket = io(L_URL, options);

  // Listening for invitation event
  socket.on(ACTIONS.FRIEND_INVITATION, async (data) => {
    console.log("invitation received");
    const { pendingInvitations } = data;

    if (pendingInvitations) {
      store.dispatch(set_pending_friend_invitations(pendingInvitations));
    }
  });

  // Listening for freinds list
  socket.on(ACTIONS.UPDATE_FRIENDS, async (data) => {
    console.log("Friends List received");
    const { friends } = data;
    if (friends) {
      store.dispatch(set_friends(friends));
    }
  });

  // Listening for online users
  socket.on(ACTIONS.ONLINE_USERS, async (data) => {
    console.log("online users update came");
    const { onlineUsers } = data;
    if (onlineUsers) {
      store.dispatch(set_online_users(onlineUsers));
    }
  });

  //listening for chat history
  socket.on(ACTIONS.DIRECT_CHAT_HISTORY, async (data) => {
    console.log("chat histroy", data);
    updateDirectChatHistoryIfActive(data);
  });

  //listening for room created
  socket.on(ACTIONS.CREATE_ROOM, (data) => {
    console.log("room created", data);
    roomHandler.newRoomCreated(data);
  });

  //listening for active rooms
  socket.on(ACTIONS.ACTIVE_ROOMS, (data) => {
    roomHandler.updateActiveRooms(data);
  });

  //listening for webRTC connection
  socket.on(ACTIONS.CONN_PREPARE, (data) => {
    const { connUserSocketId } = data;
    webRTCHandler.prepareNewPeerConnection(connUserSocketId, false);
    socket.emit(ACTIONS.CONN_INIT, { connUserSocketId: connUserSocketId });
  });

  socket.on(ACTIONS.CONN_INIT, (data) => {
    const { connUserSocketId } = data;
    webRTCHandler.prepareNewPeerConnection(connUserSocketId, true);
  });

  socket.on(ACTIONS.CONN_SIGNAL, (data) => {
    webRTCHandler.handleSignalingData(data);
  });

  socket.on(ACTIONS.PARTICIPANT_LEFT_ROOM, (data) => {
    console.log("user left room");
    webRTCHandler.handleParticipantLeftRoom(data);
  });
};

export const sendDirectMessage = (data) => {
  console.log(data);
  socket.emit(ACTIONS.SEND_DIRECT_MESSAGE, data);
};

export const getDirectChatHistory = (data) => {
  socket.emit(ACTIONS.DIRECT_CHAT_HISTORY, data);
};

export const createNewRoom = () => {
  socket.emit(ACTIONS.CREATE_ROOM);
};

export const joinRoom = (data) => {
  socket.emit(ACTIONS.JOIN_ROOM, data);
};

export const leaveRoom = (data) => {
  socket.emit(ACTIONS.LEAVE_ROOM, data);
};

export const signalPeerData = (data) => {
  socket.emit(ACTIONS.CONN_SIGNAL, data);
};
