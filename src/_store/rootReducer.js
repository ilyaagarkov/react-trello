import { combineReducers } from "redux";
import board from "../board/reducer";
import tasks from "../tasks/reducer"

export default combineReducers({
  board,
  tasks,
})