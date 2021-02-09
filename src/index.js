import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// nes css
import "nes.css/css/nes.min.css";

// context
import TasksProvider from "./context/TasksProvider";

ReactDOM.render(
  <TasksProvider>
    <div className="container">
      <App />
    </div>
  </TasksProvider>,
  document.getElementById("root")
);
