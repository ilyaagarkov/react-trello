import { GET_LISTS_FOR_BOARD } from "../constants";

export default function boardListsRedcuer(state = [], {type, payload}) {
  switch(type) {
    case GET_LISTS_FOR_BOARD : {
      return payload
    }
    default : {
      return state;
    }
  }
}