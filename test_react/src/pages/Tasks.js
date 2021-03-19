import React, { useState, useEffect } from "react";
import TasksCreate from "../components/TasksCreate";
import TasksUpdate from "../components/TasksUpdate";

import { TasksContext } from "../context/ConTextTasks";
import { TasksContextUpdate } from "../context/ConTextTasksUpdate";

function Tasks() {
  const [Tasks, setTasks] = useState({ ID_project: "" });
  const [TasksUpdateData, setTasksUpdateData] = useState([]);
  return (
    <TasksContext.Provider value={{ Tasks, setTasks }}>
      <TasksContextUpdate.Provider
        value={{ TasksUpdateData, setTasksUpdateData }}
      >
        <div>
          <h1 className="text-center"> WELCOME TO YOUR TASKS </h1>
        </div>
        <div>
          <h2 className="text-center"> Create at tasks</h2>
          <TasksCreate />
        </div>
        <div>
          <h2 className="text-center"> Update tasks data</h2>
          <TasksUpdate />
        </div>
      </TasksContextUpdate.Provider>
    </TasksContext.Provider>
  );
}

export default Tasks;
