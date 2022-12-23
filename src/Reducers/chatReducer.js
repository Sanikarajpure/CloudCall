import { act } from "@testing-library/react";
import {
  SET_CHOSEN_CHAT_DETAILS,
  SET_MESSAGES,
  SET_CHAT_TYPE,
} from "../Actions/types";
let initState = {
  chosenChatDetails: { id: null, name: null },
  chatType: null,
  messages: [],
};
const chatReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_CHOSEN_CHAT_DETAILS:
      return { 
        ...state,
        chosenChatDetails: action.payload.chatDetails,
        chatType: action.payload.chatType,
        messages: [],
      };
    case SET_MESSAGES:
      return {
        ...state,
        messages: action.payload,
      };
    default:
      return state;
  }
};

export default chatReducer;
