import { useContext, useEffect } from "react";
import TasksContext from "../../context/TasksContext";

import Task from "./Task/Task";

const Tasks = () => {
  const { tasks, getTasks } = useContext(TasksContext);

  useEffect(getTasks, []);

  return (
    <>
      {!tasks ? (
        <div style={{ marginTop: "20px" }}>Loading...</div>
      ) : (
        tasks.map((task) => (
          <Task body={task.body} isDone={task.isDone} id={task.id} key={task.id} />
        ))
      )}
    </>
  );
};

export default Tasks;
