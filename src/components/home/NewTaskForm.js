import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function NewTaskForm({ setTasks }) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleCreateTask = (e) => {
    e.preventDefault();

    value &&
      setTasks((prev) => {
        return [
          ...prev,
          {
            id: uuidv4(),
            title: value,
            status: "pending",
          },
        ];
      });

    setValue("");
  };

  return (
    <form className="new-task-form" onSubmit={handleCreateTask}>
      <input
        type="text"
        placeholder="Create new task"
        id="task"
        value={value}
        onChange={handleChange}
      />
      <button className="btn create-task-btn">Create Task</button>
    </form>
  );
}
