import React from "react";
import pDb from "../db/patient.json";
import dDb from "../db/doctor.json";
import { useSelector } from "react-redux/es/exports";
import { Doctor, Patient, Aside, Pharma } from "../components";
import './style.css';

const Dashboard = () => {
  const user = useSelector((state) => state.user.userType);
  let di = 1;
  let pi = 1;

  if (user === "Doctor")
    return (
      <div className="Dashboard">
        <aside>
          <Aside
            prof={dDb[di].dp}
            name={dDb[di].name}
            dept={dDb[di].department}
          />
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
          <Aside
            prof={pDb[pi].dp}
            name={pDb[pi].name}
            city={pDb[pi].city}
            address={pDb[pi].address}
          />
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
