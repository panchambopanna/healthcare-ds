import React from "react";
import { Card } from "../components";
import "./style.css";

const Home = () => {
  return (
    <div className="Home">
      <h1>Welcome to Health Care center</h1>
      <div className="Home__roles">
        <h3>Choose your DESTINY</h3>
        <div className="Home__bar">
          <Card user="Doctor" />
          <Card user="Patient" />
          <Card user="Pharma" />
        </div>
      </div>
    </div>
  );
};

export default Home;
