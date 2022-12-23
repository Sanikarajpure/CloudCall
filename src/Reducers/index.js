import userReducer from "./userReducer";
import friendsReducer from "./friendsReducer";
import chatReducer from "./chatReducer";
import roomReducer from "./roomReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  User: userReducer,
  Friends: friendsReducer,
  Chat: chatReducer,
  Room: roomReducer,
});

export default rootReducer;
