import { useContext, useState, useEffect } from "react";

import TasksContext from "../../context/TasksContext";
import classes from "./addTask.module.css";

const AddTask = () => {
  const { createTask, currentTask, tasks, setCurrentTask, updateTask } = useContext(
    TasksContext
  );
  const initialTaskState = { body: "", isDone: false };
  const [task, setTask] = useState(initialTaskState);

  useEffect(() => {
    if (currentTask) setTask(currentTask);
    else setTask(initialTaskState);
  }, [currentTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentTask) updateTask(task);
    else createTask(task);
    handleClear(e);
  };

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleClear = (e) => {
    e.preventDefault();
    setCurrentTask(null);
    setTask(initialTaskState);
  };

  return (
    <form className="nes-container with-title is-rounded">
      <p className="title">Create a new task</p>
      <div className="nes-field">
        <label>Task:</label>
        <input
          name="body"
          value={task.body}
          className="nes-input"
          type="text"
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className={classes.buttons}>
        <div className={classes.button}>
          <button className="nes-btn is-success" onClick={(e) => handleSubmit(e)}>
            {currentTask ? "Edit Task" : "Add Task"}
          </button>
        </div>
        <div className={classes.button}>
          <button onClick={(e) => handleClear(e)} className="nes-btn">
            Clear
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddTask;
