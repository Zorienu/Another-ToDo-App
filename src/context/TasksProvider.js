import { useReducer } from "react";
import axios from "axios";

import TasksContext from "./TasksContext";
import TasksReducer from "./TasksReducer";

const TasksProvider = (props) => {
  const initialState = {
    tasks: null,
    currentTask: null,
  };

  const [state, dispatch] = useReducer(TasksReducer, initialState);

  const getTasks = async () => {
    const res = await axios.get("http://localhost:8000/tasks");
    dispatch({ type: "GET_TASKS", payload: res.data });
    console.log(res.data);
  };

  const createTask = async (newTask) => {
    const res = await axios.post("http://localhost:8000/tasks", newTask);
    console.log(res.data);
  };

  //const setCurrentTaksId = (id) => (state.currentTaskId = id);
  const setCurrentTask = (id) => {
    dispatch({ type: "SET_CURRENT_TASK", payload: id });
    console.log(state.currentTask);
  };

  const deleteTask = async (id) => {
    console.log(id);
    const res = await axios.delete("http://localhost:8000/tasks/" + id);
    dispatch({ type: "DELETE_TASK", payload: id });
    console.log(res);
  };

  const changeTaskState = async (id) => {
    const { data } = await axios.get("http://localhost:8000/tasks/" + id);
    console.log(data);
    const res = await axios.patch("http://localhost:8000/tasks/" + id, {
      isDone: !data.isDone,
    });
    dispatch({ type: "EDIT_TASK", payload: res.data });
  };

  return (
    <TasksContext.Provider
      value={{
        tasks: state.tasks,
        selectedTask: state.selectedTask,
        setCurrentTask,
        getTasks,
        createTask,
        deleteTask,
        changeTaskState,
      }}
    >
      {props.children}
    </TasksContext.Provider>
  );
};

export default TasksProvider;
