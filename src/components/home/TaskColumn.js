import React from "react";
import Task from "../tasks/Task";

export default function TaskColumn({ tasks, label, type, setTasks }) {
  const handleUpdateTask = (taskId, status) => {
    setTasks((prev) => {
      const newTasks = prev.map((prevTask) => {
        if (prevTask.id === taskId) {
          prevTask.status = status;
        }
        return prevTask;
      });

      return newTasks;
    });
  };

  return (
    <div className="task-col">
      <h2 className="task-col-header">{label}</h2>
      <div className="tasks">
        {tasks.length ? (
          tasks.map((task) => {
            return (
              <Task
                key={task.id}
                task={task}
                handleUpdateTask={handleUpdateTask}
              />
            );
          })
        ) : (
          <p>No tasks {label.toLowerCase()}!</p>
        )}
      </div>
    </div>
  );
}
