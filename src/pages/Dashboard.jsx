import React from "react";
import doctordb from "../db/doctor.json";
import patientdb from "../db/patient.json";
import { useSelector } from "react-redux/es/exports";
import { Doctor, Patient } from "../components";

const Dashboard = () => {
  const user = useSelector((state) => state.user.userType);
  if (user === "Doctor")
    return (
      <div className="Dashboard">
        <aside>
          <img src={doctordb[0].dp} alt={doctordb[0].name} />
          <h2 id="docName">{doctordb[0].name}</h2>
          <small id="docDept">
            <i>{doctordb[0].department}</i>
          </small>
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
          <img
            src="https://cdn2.iconfinder.com/data/icons/business-hr-and-recruitment/100/account_blank_face_dummy_human_mannequin_profile_user_-512.png"
            alt={patientdb[0].name}
          />
          <h2 id="patph">{patientdb[0].name}</h2>
          <small className="patadd">
            <i>{patientdb[0].address}</i>
          </small>
          <br />
          <small className="patadd">
            <i>{patientdb[0].city}</i>
          </small>
        </aside>
        <main>
          <Patient />
        </main>
      </div>
    );
  else if (user === "Pharmacist")
    return (
      <div className="Dashboard">
        <main>This is the main pharmacist content</main>
      </div>
    );
};

export default Dashboard;
