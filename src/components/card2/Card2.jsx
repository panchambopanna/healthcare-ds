import React from "react";
import "./Card2.css";

export default function Card2({ pres, pdate }) {
  return (
    <div className="Card2">
      <h6 className="Card2__date">{pdate}</h6>
      <p className="Card2__pres">{pres}</p>
    </div>
  );
}
