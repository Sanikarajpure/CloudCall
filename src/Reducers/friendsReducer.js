import {
  SET_FRIENDS,
  SET_PENDING_FRIEND_INVITATION,
  SET_ONLINE_USERS,
} from "../Actions/types";
let initState = {
  friends: [],
  pendingFriendInvitations: [],
  onlineUsers: [],
};
const friendsReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_PENDING_FRIEND_INVITATION:
      return {
        ...state,
        pendingFriendInvitations: action.payload,
      };
    case SET_FRIENDS:
      return {
        ...state,
        friends: action.payload,
      };
    case SET_ONLINE_USERS:
      return {
        ...state,
        onlineUsers: action.payload,
      };

    default:
      return state;
  }
};

export default friendsReducer;
