import React from "react";
import "./Aside.css";
import { useSelector } from "react-redux/";
import unknownI from "../../assets/pictures/Unknown_person.jpg";

const Aside = ({ prof, name, address, city, dept }) => {
  const user = useSelector((state) => state.user.userType);

  return (
    <div className="Aside">
      <img src={user === "Patient" ? unknownI : prof} alt="" />
      <h3>{name}</h3>
      {dept ? <small>{dept}</small> : ""}
      {address ? (
        <>
          <small>{address},</small>
          <br />
        </>
      ) : (
        ""
      )}
      {city ? <small>{city}</small> : ""}
    </div>
  );
};

export default Aside;
