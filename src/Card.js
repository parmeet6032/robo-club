import React from "react";
import "./Card.css";

const Card = ({ name, email, id }) => {
  return (
    <div className="card col-sm-4 col-md-3 col-lg-2 m-3 border border-dark rounded custom-card">
      <img
        className="card-img-top"
        src={`https://robohash.org/${id}?200x200`}
        alt="robot"
      />
      <div className="card-body text-center p-1">
        <h5> {name} </h5> <p> {email} </p>{" "}
      </div>{" "}
    </div>
  );
};

export default Card;
