import React from "react";
import "./css/Card.css";

const Card = ({ name, id, deleteTask, editTask, saveTask }) => {
  return (
    <div className="card col-sm-4 col-md-3 col-lg-2 m-3 border border-dark rounded custom-card">
      <img
        className="card-img-top"
        src={`https://robohash.org/${name.toLowerCase()}?200x200`}
        alt="robot"
      />
      <div className="card-body text-center p-1">
        <h5 className="my-2" id={"name-" + id}>
          {name}
        </h5>

        <div className="d-flex justify-content-between">
          <button
            className="btn btn-outline-success btn-sm"
            type="button"
            id={"edit-" + id}
            onClick={() => {
              editTask(id);
            }}>
            Edit
          </button>

          <button
            className="btn btn-success btn-sm"
            type="button"
            id={"save-" + id}
            onClick={() => {
              saveTask(id);
            }}
            hidden={true}>
            Save
          </button>

          <button
            className="btn btn-danger btn-sm"
            onClick={() => {
              deleteTask(id);
            }}
            type="button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
