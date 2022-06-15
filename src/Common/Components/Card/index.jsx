import React from "react";
import { BsThreeDots } from "react-icons/bs";

function Card({ icon, value, desc }) {
  return (
    <div className="col-md-3">
      <div className="d-flex card-dashboard">
        <div>{icon()}</div>
        <div>
          <h5>{value}</h5>
          <p>{desc}</p>
        </div>
        <div>
          <BsThreeDots className="dot" />
        </div>
      </div>
    </div>
  );
}

export default Card;
