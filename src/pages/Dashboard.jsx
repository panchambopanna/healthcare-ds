import React from "react";
import patientdb from "../db/patient.json";
import { useSelector } from "react-redux/es/exports";
import { Doctor, Patient, Aside, Pharma } from "../components";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const user = useSelector((state) => state.user.userType);

  if (user === "Doctor")
    return (
      <div className="Dashboard">
        <aside>
          <Aside />
        </aside>
        <main>
          <Doctor />
        </main>
      </div>
    );
  else if (user === "Patient")
    return (
      <div className="Dashboard">
        <aside>
          <Aside />
        </aside>
        <main>
          <Patient />
        </main>
      </div>
    );
  else if (user === "Pharmacist")
    return (
      <div className="Dashboard">
        <aside>
          <Aside />
        </aside>
        <main>
          <Pharma />
        </main>
      </div>
    );
};

export default Dashboard;
