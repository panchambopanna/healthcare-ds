import React, { useEffect, useState } from "react";
import "./Patient.css";
import patientDb from "../../db/patient.json";
import { Card2 } from "../index";

const Patient = () => {
  let index = 1; // later will become prop passed form Home screen

  const [date, setDate] = useState();

  useEffect(() => {
    setDate(new Date(patientDb[index].nextVisit).toDateString());
  }, []);

  return (
    <div className="Patient">
      {/* Next visit marquee */}
      <marquee>
        {" "}
        You next visit is on <b>{date}</b>
      </marquee>
      {/* Prescription */}
      {patientDb[index].history.map((e, index) => (
        <Card2
          key={index}
          pres={e.prescription}
          pdate={new Date(e.visitDt).toDateString()}
        />
      ))}
    </div>
  );
};

export default Patient;
