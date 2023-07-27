import React from "react";
import Task from "../tasks/Task";

export default function TaskColumn({
  tasks,
  label,
  type,
  handleUpdateTask,
  handleDeleteTask,
}) {
  return (
    <div className="task-col">
      <h2 className="task-col-header">
        {label} ({tasks.length})
      </h2>
      <div className="tasks">
        {tasks.length ? (
          tasks.map((task) => {
            return (
              <Task
                key={task.id}
                task={task}
                handleUpdateTask={handleUpdateTask}
                handleDeleteTask={handleDeleteTask}
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
