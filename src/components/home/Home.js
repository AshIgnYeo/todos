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

  const handleUpdateTask = (taskId, status) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, status };
        }
        return task;
      });

      return updatedTasks;
    });
  };

  const handleDeleteTask = (taskId) => {
    setTasks((prevTasks) => {
      // filter out the tasks that are not the id to delete
      const updatedTasks = prevTasks.filter((task) => task.id !== taskId);
      // return the updated tasks
      return updatedTasks;
    });
  };

  return (
    <div>
      <h1>My Tasks</h1>

      <NewTaskForm setTasks={setTasks} />

      <div className="tasks-wrapper">
        <TaskColumn
          tasks={tasksPending}
          type="pending"
          label="Pending"
          handleUpdateTask={handleUpdateTask}
          handleDeleteTask={handleDeleteTask}
        />
        <TaskColumn
          tasks={tasksDoing}
          type="doing"
          label="In Progress"
          handleUpdateTask={handleUpdateTask}
          handleDeleteTask={handleDeleteTask}
        />
        <TaskColumn
          tasks={tasksDone}
          type="done"
          label="Done"
          handleUpdateTask={handleUpdateTask}
          handleDeleteTask={handleDeleteTask}
        />
      </div>
    </div>
  );
}
