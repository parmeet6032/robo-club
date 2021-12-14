import React from "react";
import Card from "./Card";
import "./css/CardList.css";

const CardList = ({ robots, deleteTask, editTask, saveTask }) => {
  return (
    <div className="row d-flex justify-content-center ps-custom">
      {robots.map((robot) => {
        return (
          <Card
            key={robot.id}
            id={robot.id}
            name={robot.name}
            deleteTask={deleteTask}
            editTask={editTask}
            saveTask={saveTask}
          />
        );
      })}
    </div>
  );
};

export default CardList;
