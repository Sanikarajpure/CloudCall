import {
  SET_OPEN_ROOM,
  SET_ROOM_DETAILS,
  SET_ACTIVE_ROOMS,
  SET_LOCAL_STREAM,
  SET_REMOTE_STREAMS,
  SET_AUDIO_ONLY,
  SET_SCREEN_SHARE_STREAM,
} from "../Actions/types";
let initState = {
  isUserInRoom: false,
  isUserRoomCreator: false,
  roomDetails: null,
  activeRooms: [],
  localStream: null,
  remoteStreams: [],
  audioOnly: false,
  screenSharingStream: null,
  isScreenSharingActive: false,
};
const roomReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_OPEN_ROOM:
      return {
        ...state,
        isUserRoomCreator: action.payload.isUserRoomCreator,
        isUserInRoom: action.payload.isUserInRoom,
      };
    case SET_ROOM_DETAILS:
      return {
        ...state,
        roomDetails: action.payload,
      };
    case SET_AUDIO_ONLY:
      return {
        ...state,
        audioOnly: action.payload,
      };
    case SET_ACTIVE_ROOMS:
      return {
        ...state,
        activeRooms: action.payload,
      };

    case SET_LOCAL_STREAM:
      return {
        ...state,
        localStream: action.payload,
      };

    case SET_REMOTE_STREAMS:
      return {
        ...state,
        remoteStreams: action.payload,
      };
    case SET_SCREEN_SHARE_STREAM:
      return {
        ...state,
        screenSharingStream: action.payload.screenSharingStream,
        isScreenSharingActive: action.payload.isScreenSharingActive,
      };

    default:
      return state;
  }
};

export default roomReducer;
