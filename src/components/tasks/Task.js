import React from "react";
import "./task.css";

export default function Task({ task, handleUpdateTask }) {
  return (
    <div className="task" data-id={task.id}>
      <h3>{task.title}</h3>

      <small>Mark as: </small>
      <div className="actions">
        <button
          className="btn btn-pending"
          onClick={() => handleUpdateTask(task.id, "pending")}
        >
          Pending
        </button>

        <button
          className="btn btn-doing"
          onClick={() => handleUpdateTask(task.id, "doing")}
        >
          Doing
        </button>

        <button
          className="btn btn-done"
          onClick={() => handleUpdateTask(task.id, "done")}
        >
          Done
        </button>
      </div>
    </div>
  );
}
