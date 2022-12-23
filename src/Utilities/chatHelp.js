import store from "../store";
import { set_messages } from "../Actions/chatAtions";

export const updateDirectChatHistoryIfActive = (data) => {
  const { participants, messages } = data;

  // find id of user from token and id from active conversation
  const receiverId = store.getState().Chat.chosenChatDetails?.id;
  const userId = store.getState().User.user_verification.user._id;

  if (receiverId && userId) {
    const usersInCoversation = [receiverId, userId];

    updateChatHistoryIfSameConversationActive({
      participants,
      usersInCoversation,
      messages,
    });
  }
};

const updateChatHistoryIfSameConversationActive = ({
  participants,
  usersInCoversation,
  messages,
}) => {
  const result = participants.every(function (participantId) {
    return usersInCoversation.includes(participantId);
  });

  if (result) {
    store.dispatch(set_messages(messages));
  }
};
