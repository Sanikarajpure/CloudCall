import {
  SET_FRIENDS,
  SET_PENDING_FRIEND_INVITATION,
  SET_ONLINE_USERS,
} from "./types";

export const set_friends = (friends) => ({
  type: SET_FRIENDS,
  payload: friends,
});

export const set_pending_friend_invitations = (pendingFriendInvitations) => ({
  type: SET_PENDING_FRIEND_INVITATION,
  payload: pendingFriendInvitations,
});

export const set_online_users = (onlineUsers) => ({
  type: SET_ONLINE_USERS,
  payload: onlineUsers,
});
