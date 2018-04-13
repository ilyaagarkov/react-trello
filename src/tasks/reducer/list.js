import { GET_TASKS, MOVE_TASK, ADD_TASK, EDIT_TASK_END } from "../constants";

export default function boardListsRedcuer(state = [], {type, payload}) {
  switch(type) {
    case GET_TASKS : {
      return payload
    }
    case MOVE_TASK: {
      const {task, listId, position} = payload;
      return state.map(currentTask => {

        if(currentTask.id === task.id) return {
          ...currentTask,
          listId,
          position,
        }  

        if(currentTask.listId === listId) return {
          ...currentTask,
          position: currentTask.position >= position ? currentTask.position + 1  : currentTask.position
        }

        if(currentTask.listId === task.listId) return {
          ...currentTask,
          position: currentTask.position > position ? currentTask.position - 1  : currentTask.position
        }
        return currentTask;

      })
    }
    case ADD_TASK: {
      return state.concat({
        ...payload,
        position: Math.max(...state.filter(t => t.listId === payload.listId).map(t => t.position)) + 1
      });
    }
    case EDIT_TASK_END: {
      return state.map(task => task.id !== payload.id ? task : {...task, ...payload})
    }
    default : {
      return state;
    }
  }
}