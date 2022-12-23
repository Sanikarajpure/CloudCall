import store from "../store";
import {
  set_open_room,
  set_room_details,
  set_active_rooms,
  set_local_stream,
  set_remote_streams,
  set_screen_share_stream,
  set_audio_only,
} from "../Actions/roomActions";
import * as socketConnection from "./socket";
import * as webRTCHandler from "./webRTChandler";

export const createNewRoom = () => {
  const successCalbackFunc = () => {
    store.dispatch(set_open_room(true, true));

    const audioOnly = store.getState().Room.audioOnly;

    store.dispatch(set_audio_only(audioOnly));
    socketConnection.createNewRoom();
  };

  const audioOnly = store.getState().Room.audioOnly;
  webRTCHandler.getLocalStreamPreview(audioOnly, successCalbackFunc);
};

export const newRoomCreated = (data) => {
  const { roomDetails } = data;
  store.dispatch(set_room_details(roomDetails));
};

export const updateActiveRooms = (data) => {
  const { activeRooms } = data;

  const friends = store.getState().Friends.friends;
  const rooms = [];

  const userId = store.getState().User.user_verification.user?._id;

  activeRooms.forEach((room) => {
    const isRoomCreatedByMe = room.roomCreator.userId === userId;

    if (isRoomCreatedByMe) {
      rooms.push({ ...room, creatorUsername: "Me" });
    } else {
      friends.forEach((f) => {
        if (f.id === room.roomCreator.userId) {
          rooms.push({
            ...room,
            creatorUsername: f.firstName,
          });
        }
      });
    }
  });

  store.dispatch(set_active_rooms(rooms));
};

export const joinRoom = (roomId) => {
  const successCalbackFunc = () => {
    store.dispatch(set_room_details({ roomId }));
    store.dispatch(set_open_room(false, true));
    const audioOnly = store.getState().Room.audioOnly;

    store.dispatch(set_audio_only(audioOnly));
    socketConnection.joinRoom({ roomId });
  };

  const audioOnly = store.getState().Room.audioOnly;
  webRTCHandler.getLocalStreamPreview(audioOnly, successCalbackFunc);
};

export const leaveRoom = () => {
  const roomId = store.getState().Room.roomDetails.roomId;

  const localStream = store.getState().Room.localStream;
  if (localStream) {
    localStream.getTracks().forEach((track) => track.stop());
    store.dispatch(set_local_stream(null));
  }

  const screenSharingStream = store.getState().Room.screenSharingStream;
  if (screenSharingStream) {
    screenSharingStream.getTracks().forEach((track) => track.stop());
    store.dispatch(set_screen_share_stream(null));
  }

  store.dispatch(set_remote_streams([]));
  webRTCHandler.closeAllConnections();

  socketConnection.leaveRoom({ roomId });
  store.dispatch(set_room_details(null));
  store.dispatch(set_open_room(false, false));
};
