import { EDIT_TASK_START, EDIT_TASK_END } from "../constants";

const defaultState = null;

export default function editedTaskReducer(state = defaultState, {type, payload}) {
  switch (type) {
    case EDIT_TASK_START: {
      return payload
    }
    case EDIT_TASK_END: {
      return defaultState
    }
    default: {
      return state;
    }
  }
}