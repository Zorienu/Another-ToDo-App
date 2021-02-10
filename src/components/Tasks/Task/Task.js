import classes from "./task.module.css";
import { useContext } from "react";
import TasksContext from "../../../context/TasksContext";

const Task = ({ body, isDone, id }) => {
  const { setCurrentTask, deleteTask, changeTaskState } = useContext(TasksContext);

  return (
    <div className={classes.taskContainer}>
      <div className={`nes-container is-rounded ${classes.taskItem}`}>
        <label>
          <input
            onClick={() => changeTaskState(id)}
            type="checkbox"
            className="nes-checkbox"
            defaultChecked={isDone}
          />
          <span className={classes.taskBody}>{body}</span>
        </label>
        <div className={classes.buttons}>
          <div className={classes.button}>
            <button className="nes-btn is-primary" onClick={() => setCurrentTask(id)}>
              Edit
            </button>
          </div>
          <div className={classes.button}>
            <button onClick={() => deleteTask(id)} className="nes-btn is-error">
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
