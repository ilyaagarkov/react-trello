import { getBoardLists } from "./api";
import { GET_LISTS_FOR_BOARD, GET_LISTS_FOR_BOARD_FAILURE } from "./constants";

export const getListsForBoard = () => async (dispatch) => {
  try {
    const lists = await getBoardLists();
    dispatch({
      type: GET_LISTS_FOR_BOARD,
      payload: lists
    })
  } catch (error) {
    dispatch({
      type: GET_LISTS_FOR_BOARD_FAILURE,
      error
    })
  }

}