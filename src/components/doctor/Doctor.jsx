import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Doctor.css";

const Doctor = () => {
  return (
    <div className="Doctor">
      <div className="Doctor__search">
        <input
          type="search"
          name="patientSearch"
          id="patientSearch"
          placeholder="Enter patient's name or id"
        />
        <button type="button">
          <FontAwesomeIcon icon={faSearch} />
        </button>
        <button type="button">Add patient</button>
      </div>
      <form className="patientInfo">
        {/*Existing ailments[Use multiselect] */}
        <label htmlFor="pId">Id: </label>
        <input type="number" name="pId" id="pId" />
        <br />
        <label htmlFor="pName">Name: </label>
        <input type="text" name="pName" id="pName" />
        <br />
        <label htmlFor="pDob">Date of birth: </label>
        <input type="date" name="pDob" id="pDob" />
        <br />
        <label htmlFor="pAge">Age: </label>
        <input type="number" name="pAge" id="pAge" />
        <br />
        <label htmlFor="pGender">Gender: </label>
        <label htmlFor="pMale">Male</label>
        <input type="radio" name="pGender" id="pMale" />
        <label htmlFor="pFemale">Female</label>
        <input type="radio" name="pGender" id="pFemale" />
        <br />
        <label htmlFor="pNat">Nationality: </label>
        <input type="text" name="pNat" id="pNat" />
        <br />
        <label htmlFor="pAil"> Existing ailments: </label>
        <input type="checkbox" name="pAil" id="cough" />
        <label htmlFor="cough">Cough</label>
        <br />
        <input type="checkbox" name="pAil" id="cold" />
        <label htmlFor="cold">Cold</label>
        <br />
        <input type="checkbox" name="pAil" id="headache" />
        <label htmlFor="headache">Headache</label>
        <br />
        <input type="checkbox" name="pAil" id="bodyache" />
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
