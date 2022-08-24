import React from "react";
import { Card } from "../components";
import "./style.css";
import dDb from "../db/doctor.json";
import { useSelector } from "react-redux";

const Home = () => {
  const patients = useSelector((state) => state.patient.patients);
  return (
    <div className="Home">
      <h1>Welcome to Health Care center</h1>
      <div className="Home__roles">
        <h3>Choose your DESTINY</h3>
        <div className="Home__bar">
          <Card user="Doctor" db={dDb} />
          <Card user="Patient" db={patients} />
          <Card user="Pharmacist" />
        </div>
      </div>
    </div>
  );
};

export default Home;
