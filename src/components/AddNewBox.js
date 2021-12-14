import React from "react";
import "./css/AddNewBox.css";

export default function AddNewBox({ currentTask, handleChange, handleSubmit }) {
  return (
    <div className="add-new-container d-flex justify-content-center">
      <div className="input-group mb-3 add-new-input">
        <input
          type="text"
          value={currentTask}
          onChange={handleChange}
          className="form-control"
          placeholder="Add new task..."
          aria-label=" Add new task..."
          aria-describedby="add-task-button"
        />
        <button
          className="btn btn-outline-primary"
          type="button"
          id="add-task-button"
          onClick={handleSubmit}>
          Add Task
        </button>
      </div>
    </div>
  );
}
