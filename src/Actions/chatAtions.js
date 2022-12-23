import { SET_CHOSEN_CHAT_DETAILS, SET_MESSAGES, SET_CHAT_TYPE } from "./types";

export const chatTypes = {
  DIRECT: "DIRECT",
  GROUP: "GROUP",
};

export const set_chosen_chat_details = (chatDetails, type) => ({
  type: SET_CHOSEN_CHAT_DETAILS,
  payload: {
    chatType: type,
    chatDetails,
  },
});

export const set_messages = (messages) => ({
  type: SET_MESSAGES,
  payload: messages,
});
