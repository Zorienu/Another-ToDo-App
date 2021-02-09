import { useContext } from "react";

import TasksContext from "../../context/TasksContext";
import classes from "./addTask.module.css";

const AddTask = () => {
  const { createTask, selectedTask } = useContext(TasksContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask();
  };

  return (
    <form className="nes-container with-title is-rounded">
      <p className="title">Create a new task</p>
      <div className="nes-field">
        <label htmlFor="name_fieeeld">Task:</label>
        <input className="nes-input" type="text" />
      </div>
      <div className={classes.buttons}>
        <div className={classes.button}>
          <button onSubmit={(e) => handleSubmit(e)} className="nes-btn is-success">
            Add Task
          </button>
        </div>
        <div className={classes.button}>
          <button className="nes-btn">Clear</button>
        </div>
      </div>
    </form>
  );
};

export default AddTask;
