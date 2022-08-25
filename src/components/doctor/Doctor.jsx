import React, { useEffect, useState } from "react";
import "./Doctor.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUserPlus,
  faClose
} from "@fortawesome/free-solid-svg-icons";
import Pop from "../pop/Pop";
import { useSelector } from "react-redux";
import Aside from "../aside/Aside";
import dDb from "../../db/doctor.json";

const Doctor = () => {
  const [info, setInfo] = useState(false);
  const [sText, setsText] = useState();
  const [patient, setPatient] = useState(null);
  const patients = useSelector((state) => state.patient.patients);
  const userInfo = useSelector((state) => state.user.userType);
  let j;

  useEffect(() => {
    console.log("useEffect", sText);
    if (sText) {
      console.log("if running");
      fetchPatient(sText);
    }
  }, [patients]);

  console.log(patients, patient);

  const fetchPatient = (sText) => {
    //Needs improvement
    console.log("fetch user");
    for (let i = 0; i < patients.length; i++) {
      if (patients[i].id == sText) {
        // j = i;
        return setPatient(patients[i]);
      } else if (patients[i].name.toLowerCase().split(" ").includes(sText)) {
        // j = i;
        return setPatient(patients[i]);
      }
    }
    console.error("Unable to fetch user");
  };
  const addPatient = () => {
    console.log("Adding patient");
    setsText(); //might have to remove later
    setInfo(true);
  };

  return (
    <div className="Doctor">
      <aside>
        <Aside
          prof={dDb[userInfo.id - 1].dp}
          name={dDb[userInfo.id - 1].name}
          dept={dDb[userInfo.id - 1].department}
        />
      </aside>
      <div className="Doctor__main">
        <div className="Doctor__main-search">
          <input
            type="search"
            name="search"
            id="pSearch"
            onChange={(e) => setsText(e.target.value)}
            placeholder="Enter patient name or id"
          />
          <button title="Search" onClick={() => fetchPatient(sText)}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
        {/* when the search is clicked and values are fetched add something here */}
        {patient && (
          <div className="Doctor__main-pInfo">
            <span
              className="close"
              onClick={() => {
                document.getElementById("pSearch").value = "";
                setPatient(null);
              }}
            >
              <FontAwesomeIcon icon={faClose} />
            </span>
            <div>
              <b>ID</b>: {patient.id}
            </div>
            <div>
              <b>Name</b>: {patient.name}
            </div>
            <div>
              <b>Date of birth</b>: {patient.dob}
            </div>
            <div>
              <b>Age</b>: {patient.age}
            </div>
            <div>
              <b>Gender</b>: {patient.gender}
            </div>
            <div>
              <b>Symptoms</b>: {patient.symp.cough && <span>Cough</span>}{" "}
              {patient.symp.cold && <span>Cold</span>}{" "}
              {patient.symp.stomachache && <span> Stomach Ache</span>}
              {patient.symp.headache && <span> Headache</span>}
            </div>
          </div>
        )}
        {!info ? (
          <button
            id="addP"
            title="Add patient"
            onClick={() => {
              addPatient();
              setPatient(null);
            }}
          >
            <FontAwesomeIcon icon={faUserPlus} size="2x" />
          </button>
        ) : (
          <Pop setInfo={setInfo} />
        )}
      </div>
    </div>
  );
};

export default Doctor;
