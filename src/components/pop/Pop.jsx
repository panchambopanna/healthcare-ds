import React, { useState } from "react";
import "./Pop.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const Pop = ({ setInfo }) => {
  const [inputValue, setInputValue] = useState({
    name: "",
    gender: "",
    dob: "",
    age: "",
    phone: "",
    email: "",
    symp: { cough: false, cold: false, stomachache: false, headache: false },
    pres: ""
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      window.confirm(
        `Do you agree to the infor entered? ${JSON.stringify(inputValue)}`
      )
    ) {
      setInfo(false);
    }
  };
  return (
    <div className="Pop">
      <div className="Pop__main">
        <h2>Add Patient</h2>
        <span
          title="Close"
          className="close"
          onClick={() => {
            setInfo(false);
          }}
        >
          <FontAwesomeIcon icon={faClose} />
        </span>
        <form action="" onSubmit={handleSubmit}>
          <div className="fItem">
            <label htmlFor="pName">Name</label>
            <br />
            <input
              type="text"
              name="pName"
              id="pName"
              placeholder="Enter patient's full name"
              value={inputValue.name}
              onChange={(e) =>
                setInputValue({ ...inputValue, name: e.target.value })
              }
            />
          </div>
          <div className="fItem">
            <label htmlFor="pGen">Gender</label>
            <br />
            <input
              type="radio"
              name="pGen"
              id="pMale"
              value={inputValue.gender}
              onChange={(e) => setInputValue({ ...inputValue, gender: "M" })}
            />
            <label htmlFor="pMale">Male</label>
            <input
              type="radio"
              name="pGen"
              id="pFemale"
              value={inputValue.gender}
              onChange={(e) => setInputValue({ ...inputValue, gender: "F" })}
            />
            <label htmlFor="pFemale">Female</label>
          </div>
          <div className="fItem">
            <label htmlFor="pDob">Date of birth</label>
            <br />
            <input
              type="date"
              name="pDob"
              id="pDob"
              value={inputValue.dob}
              onChange={(e) =>
                setInputValue({ ...inputValue, dob: e.target.value })
              }
            />
          </div>
          <div className="fItem">
            <label htmlFor="pAge">Age</label>
            <br />
            <input
              type="number"
              name="pAge"
              id="pAge"
              placeholder="Enter patient's age in years"
              value={inputValue.age}
              onChange={(e) =>
                setInputValue({ ...inputValue, age: e.target.value })
              }
            />
          </div>
          <div className="fItem">
            <label htmlFor="pPh">Telephone</label>
            <br />
            <input
              type="telephone"
              name="pPh"
              id="pPh"
              placeholder="Enter patient's phone number"
              value={inputValue.phone}
              onChange={(e) =>
                setInputValue({ ...inputValue, phone: e.target.value })
              }
            />
          </div>
          <div className="fItem">
            <label htmlFor="pMail">Email</label>
            <br />
            <input
              type="email"
              name="pMail"
              id="pMail"
              placeholder="Enter patient's email"
              value={inputValue.email}
              onChange={(e) =>
                setInputValue({ ...inputValue, email: e.target.value })
              }
            />
          </div>
          <div className="fItem">
            <label>Symptoms</label>
            <small>(Check the symptoms as reported by patient)</small> <br />
            <input
              type="checkbox"
              name="cough"
              id="cough"
              checked={inputValue.symp.cough}
              onChange={(e) =>
                setInputValue({
                  ...inputValue,
                  symp: { ...inputValue.symp, cough: e.target.checked }
                })
              }
            />
            <label htmlFor="cough">Cough</label>
            <br />
            <input
              type="checkbox"
              name="cold"
              id="cold"
              checked={inputValue.symp.cold}
              onChange={(e) =>
                setInputValue({
                  ...inputValue,
                  symp: { ...inputValue.symp, cold: e.target.checked }
                })
              }
            />
            <label htmlFor="cold">Cold</label>
            <br />
            <input
              type="checkbox"
              name="stomachache"
              id="stomachache"
              checked={inputValue.symp.stomachache}
              onChange={(e) =>
                setInputValue({
                  ...inputValue,
                  symp: { ...inputValue.symp, stomachache: e.target.checked }
                })
              }
            />
            <label htmlFor="stomachache">Stomach Ache</label>
            <br />
            <input
              type="checkbox"
              name="headache"
              id="headache"
              checked={inputValue.symp.headache}
              onChange={(e) =>
                setInputValue({
                  ...inputValue,
                  symp: { ...inputValue.symp, headache: e.target.checked }
                })
              }
            />
            <label htmlFor="headache">Head Ache</label>
            <br />
          </div>
          <div className="fItem">
            <label htmlFor="pres">Prescription</label>
            <br />
            <textarea
              name="pres"
              id="pres"
              cols="30"
              style={{ resize: "none" }}
              rows="10"
              value={inputValue.pres}
              onChange={(e) =>
                setInputValue({ ...inputValue, pres: e.target.value })
              }
            ></textarea>
          </div>
          <button type="submit">Submit</button>
          <button
            type="cancel"
            onClick={() => {
              setInfo(false);
            }}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default Pop;
