import React, { useState } from "react";
import "./Doctor.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import Pop from "../pop/Pop";

const Doctor = () => {
  const [info, setInfo] = useState(false);
  const fetchPatient = () => {
    console.log("Fetching patient...");
    setInfo(true);
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
            placeholder="Enter patient name or id"
          />
          <button title="Search" onClick={() => fetchPatient()}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
        {!info ? (
          <button id="addP" title="Add patient" onClick={() => addPatient()}>
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
