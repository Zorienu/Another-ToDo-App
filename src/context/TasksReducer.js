import { ADD_TASK, DELETE_TASK, EDIT_TASK, GET_TASKS, SET_CURRENT_TASK } from "./types";

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TASK:
      return state.tasks.push(action.payload);
    case DELETE_TASK:
      const newTasks = state.tasks.filter((task) => task.id !== action.payload);
      return { ...state, tasks: newTasks };
    case EDIT_TASK:
      const editedTasks = state.tasks.map((task) =>
        task.id === action.payload.id ? action.payload : task
      );
      return { ...state, tasks: editedTasks };
    case GET_TASKS:
      return { ...state, tasks: action.payload };
    case SET_CURRENT_TASK:
      return state.tasks.find((task) => task.id === action.payload.id);
    default:
      return state;
  }
};

export default reducer;
