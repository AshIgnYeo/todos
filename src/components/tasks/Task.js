import React from "react";
import { FaTimesCircle, FaEdit, FaClock, FaCheckCircle } from "react-icons/fa";
import "./task.css";

export default function Task({ task, handleUpdateTask, handleDeleteTask }) {
  return (
    <div className="task" data-id={task.id}>
      <h3>{task.title}</h3>

      <FaTimesCircle
        className="icon-delete"
        onClick={() => handleDeleteTask(task.id)}
      />

      <small>Mark as: </small>
      <div className="actions">
        <button
          className="btn btn-pending"
          onClick={() => handleUpdateTask(task.id, "pending")}
        >
          <FaClock /> Pending
        </button>

        <button
          className="btn btn-doing"
          onClick={() => handleUpdateTask(task.id, "doing")}
        >
          <FaEdit /> Doing
        </button>

        <button
          className="btn btn-done"
          onClick={() => handleUpdateTask(task.id, "done")}
        >
          <FaCheckCircle /> Done
        </button>
      </div>
    </div>
  );
}
