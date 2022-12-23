import {
  SET_OPEN_ROOM,
  SET_ROOM_DETAILS,
  SET_ACTIVE_ROOMS,
  SET_LOCAL_STREAM,
  SET_REMOTE_STREAMS,
  SET_AUDIO_ONLY,
  SET_SCREEN_SHARE_STREAM,
  SET_IS_USER_JOINED_WITH_ONLY_AUDIO,
} from "./types";

export const set_open_room = (
  isUserRoomCreator = false,
  isUserInRoom = false
) => ({
  type: SET_OPEN_ROOM,
  payload: {
    isUserRoomCreator,
    isUserInRoom,
  },
});

export const getActions = (dispatch) => {
  return {
    setAudioOnly: (audioOnly) => dispatch(set_audio_only(audioOnly)),
    setScreenSharingStream: (stream) => {
      dispatch(set_screen_share_stream(stream));
    },
  };
};

export const set_room_details = (roomDetails) => {
  return {
    type: SET_ROOM_DETAILS,
    payload: roomDetails,
  };
};

export const set_active_rooms = (activeRooms) => {
  return {
    type: SET_ACTIVE_ROOMS,
    payload: activeRooms,
  };
};

export const set_local_stream = (localStream) => {
  return {
    type: SET_LOCAL_STREAM,
    payload: localStream,
  };
};

export const set_audio_only = (audioOnly) => {
  return {
    type: SET_AUDIO_ONLY,
    payload: audioOnly,
  };
};

export const set_remote_streams = (remoteStreams) => {
  return {
    type: SET_REMOTE_STREAMS,
    payload: remoteStreams,
  };
};

export const set_screen_share_stream = (stream) => {
  return {
    type: SET_SCREEN_SHARE_STREAM,
    payload: {
      isScreenSharingActive: stream ? true : false,
      screenSharingStream: stream || null,
    },
  };
};
