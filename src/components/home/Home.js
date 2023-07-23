import React, { useEffect, useState } from "react";
import TaskColumn from "./TaskColumn";
import NewTaskForm from "./NewTaskForm";
import "./home.css";

export default function Home({ tasks, setTasks }) {
  const [tasksPending, setTasksPending] = useState([]);
  const [tasksDoing, setTasksDoing] = useState([]);
  const [tasksDone, setTasksDone] = useState([]);

  useEffect(() => {
    setTasksPending(tasks.filter((task) => task.status === "pending"));
    setTasksDoing(tasks.filter((task) => task.status === "doing"));
    setTasksDone(tasks.filter((task) => task.status === "done"));
  }, [tasks]);

  return (
    <div>
      <h1>My Tasks</h1>

      <NewTaskForm setTasks={setTasks} />

      <div className="tasks-wrapper">
        <TaskColumn
          tasks={tasksPending}
          type="pending"
          label="Pending"
          setTasks={setTasks}
        />
        <TaskColumn
          tasks={tasksDoing}
          type="doing"
          label="In Progress"
          setTasks={setTasks}
        />
        <TaskColumn
          tasks={tasksDone}
          type="done"
          label="Done"
          setTasks={setTasks}
        />
      </div>
    </div>
  );
}
