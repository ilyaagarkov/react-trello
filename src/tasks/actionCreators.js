import { getBoardTasks } from "./api";
import { 
  GET_TASKS,
  GET_TASKS_FAILURE,
  MOVE_TASK,
  EDIT_TASK_START,
  EDIT_TASK_END
} from "./constants";

export const getTasks = () => async (dispatch) => {
  try {
    const tasks = await getBoardTasks();
    dispatch({
      type: GET_TASKS,
      payload: tasks
    })
  } catch (error) {
    dispatch({
      type: GET_TASKS_FAILURE,
      error
    })
  }
}

export const moveTask = (task, listId, position) => ({
    type: MOVE_TASK,
    payload: {
      task,
      listId,
      position
    }
  })

export const startEditTask = (taskId) => ({
  type: EDIT_TASK_START,
  payload: taskId
})

export const endEditTask = (task) => ({
  type: EDIT_TASK_END,
  payload: task
})
