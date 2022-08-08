import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Doctor.css";

const Doctor = () => {
  const callForm = () => {
    document.getElementById("patientInfo").style.display = "block";
  };
  const fetchUser = () => {
    document.getElementById("patientInfo").style.display = "block";
    let pInput = document.getElementsByClassName("pInput");
    // pInput[0].setAttribute("disabled",true);
    for (let i = 0; i < pInput.length; i++) {
      pInput[i].setAttribute("disabled", true);
    }
  };
  return (
    <div className="Doctor">
      <div className="Doctor__search">
        <input
          type="search"
          name="patientSearch"
          id="patientSearch"
          placeholder="Enter patient's name or id"
        />
        <button type="button" onClick={fetchUser}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
        <button type="button" onClick={callForm}>
          Add patient
        </button>
      </div>
      <form id="patientInfo" style={{ display: "none" }}>
        {/*Existing ailments[Use multiselect] */}
        <label htmlFor="pId">Id: </label>
        <input className="pInput" type="number" name="pId" id="pId" />
        <br />
        <label htmlFor="pName">Name: </label>
        <input className="pInput" type="text" name="pName" id="pName" />
        <br />
        <label htmlFor="pDob">Date of birth: </label>
        <input className="pInput" type="date" name="pDob" id="pDob" />
        <br />
        <label htmlFor="pAge">Age: </label>
        <input className="pInput" type="number" name="pAge" id="pAge" />
        <br />
        <label htmlFor="pGender">Gender: </label>
        <label htmlFor="pMale">Male</label>
        <input className="pInput" type="radio" name="pGender" id="pMale" />
        <label htmlFor="pFemale">Female</label>
        <input className="pInput" type="radio" name="pGender" id="pFemale" />
        <br />
        <label htmlFor="pNat">Nationality: </label>
        <input className="pInput" type="text" name="pNat" id="pNat" />
        <br />
        <label htmlFor="pAil"> Existing ailments: </label>
        <input className="pInput" type="checkbox" name="pAil" id="cough" />
        <label htmlFor="cough">Cough</label>
        <br />
        <input className="pInput" type="checkbox" name="pAil" id="cold" />
        <label htmlFor="cold">Cold</label>
        <br />
        <input className="pInput" type="checkbox" name="pAil" id="headache" />
        <label htmlFor="headache">Headache</label>
        <br />
        <input className="pInput" type="checkbox" name="pAil" id="bodyache" />
        <label htmlFor="bodyache">Bodyache</label>
        <br />
        <label htmlFor="pSum">Prescription: </label>
        <textarea
          name="pSum"
          id="pSum"
          cols="30"
          rows="10"
          style={{ resize: "none" }}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Doctor;
