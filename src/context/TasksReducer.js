import {
  CREATE_TASK,
  DELETE_TASK,
  UPDATE_TASK,
  GET_TASKS,
  SET_CURRENT_TASK,
} from "./types";

const reducer = (state, action) => {
  let newTasks;
  switch (action.type) {
    case CREATE_TASK:
      newTasks = state.tasks;
      newTasks.push(action.payload);
      return { ...state, tasks: newTasks };
    case DELETE_TASK:
      newTasks = state.tasks.filter((task) => task.id !== action.payload);
      return { ...state, tasks: newTasks };
    case UPDATE_TASK:
      newTasks = state.tasks.map((task) =>
        task.id === action.payload.id ? action.payload : task
      );
      return { ...state, tasks: newTasks };
    case GET_TASKS:
      return { ...state, tasks: action.payload };
    case SET_CURRENT_TASK:
      let currentTask = state.tasks.find((task) => task.id === action.payload);
      if (!currentTask) currentTask = null;
      return { ...state, currentTask };
    default:
      return state;
  }
};

export default reducer;
