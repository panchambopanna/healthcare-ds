import React, { useState } from "react";
import "./Doctor.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import Pop from "../pop/Pop";
import { useSelector } from "react-redux";

const Doctor = () => {
  const [info, setInfo] = useState(false);
  const [sText, setsText] = useState();
  const [patient, setPatient] = useState(null);
  const patients = useSelector((state) => state.patient.patients);

  const fetchPatient = (sText) => {
    //Needs improvement
    console.log("fetch user");
    for (let i = 0; i < patients.length; i++) {
      if (patients[i].id == sText) {
        document.querySelector(".Doctor__main--pInfo").style.display = "block";
        return setPatient(patients[i]);
      } else if (patients[i].name == sText) {
        document.querySelector(".Doctor__main--pInfo").style.display = "block";
        return setPatient(patients[i]);
      }
    }
    console.error("Unable to fetch user");
  };
  const addPatient = () => {
    console.log("Adding patient");
    setInfo(true);
  };

  return (
    <div className="Doctor">
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
        <div className="Doctor__main--pInfo">
          <div>ID: {patient?.id}</div>
          <div>Name: {patient?.name}</div>
          <div>Date of birth: {patient?.dob}</div>
          <div>Age: {patient?.age}</div>
          <div>Gender: {patient?.gender}</div>
          <div>
            Aliments:
            {patient?.symp.cough ? "Cough" : ""}
            {patient?.symp.cold ? ", Cold" : ""}
            {patient?.symp.stomachache ? ", Stomach Ache" : ""}
            {patient?.symp.headache ? ", Headache" : ""}
          </div>
          <div className="Doctor__main--card">
            Visit History
            {patient?.pres?.map((e, index) => (
              <div key={index} className="card">
                <details>
                  <summary>{e.visitDt}</summary>
                  <p>{e.txt}</p>
                </details>
              </div>
            ))}
          </div>
        </div>

        {!info ? (
          <button
            id="addP"
            title="Add patient"
            onClick={() => {
              addPatient();
              setPatient(null);
              document.querySelector(".Doctor__main--pInfo").style.display =
                "none";
            }}
          >
            <FontAwesomeIcon icon={faUserPlus} size="4x" />
          </button>
        ) : (
          <Pop setInfo={setInfo} />
        )}
      </div>
    </div>
  );
};

export default Doctor;
