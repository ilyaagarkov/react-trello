import { combineReducers } from "redux";
import list from "./list";
import editedTask from "./editedTask"

export default combineReducers({
  list,
  editedTask
});
