import { axiosInstance } from "../../Utilities/axiosHelper";
import { getTokenCookie, getAuthHeader } from "../../Utilities/authTools";

export const sendFriendInvitation = async (data) => {
  if (!getTokenCookie()) {
    return false;
  } else {
    const response = await axiosInstance.post(
      "/friend/invite",
      data,
      getAuthHeader()
    );
    return response;
  }
};

export const acceptFriendInvitation = async (data) => {
  if (!getTokenCookie()) {
    return false;
  } else {
    const response = await axiosInstance.post(
      "/friend/accept_invite",
      data,
      getAuthHeader()
    );
    return response;
  }
};

export const rejectFriendInvitation = async (data) => {
  if (!getTokenCookie()) {
    return false;
  } else {
    const response = await axiosInstance.post(
      "/friend/reject_invite",
      data,
      getAuthHeader()
    );
    return response;
  }
};
