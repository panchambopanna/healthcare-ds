import React, { useState } from "react";
import "./Pop.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { addPatient } from "../../redux/patientSlice";

const Pop = ({ setInfo, fn }) => {
  const dispatch = useDispatch();
  const patients = useSelector((state) => state.patient);

  const [inputValue, setInputValue] = useState({
    id: "",
    name: "",
    dob: "",
    age: "",
    gender: "",
    nationality: "",
    symp: { cough: false, cold: false, stomachache: false, headache: false },
    pres: [],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    inputValue.id = patients.patients.length + 1;
    dispatch(addPatient(inputValue));
    setInfo(false);
    fn();
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
            <label htmlFor="pId">Patient Id: </label>
            <input
              type="number"
              name="pId"
              id="pId"
              disabled
              value={patients.patients.length + 1}
            />
          </div>
          <div className="fItem">
            <label htmlFor="pName">
              <span className="req">*</span>Name
            </label>
            <br />
            <input
              type="text"
              name="pName"
              id="pName"
              placeholder="Enter patient's full name"
              required
              value={inputValue.name}
              onChange={(e) =>
                setInputValue({ ...inputValue, name: e.target.value })
              }
            />
          </div>
          <div className="fItem">
            <label htmlFor="pDob">
              <span className="req">*</span>Date of birth
            </label>
            <br />
            <input
              type="date"
              name="pDob"
              id="pDob"
              required
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
            <label htmlFor="pGen">
              <span className="req">*</span>Gender
            </label>
            <br />
            <input
              type="radio"
              name="pGen"
              id="pMale"
              required
              value={inputValue.gender}
              onChange={(e) => setInputValue({ ...inputValue, gender: "Male" })}
            />
            <label htmlFor="pMale">Male</label>
            <input
              type="radio"
              name="pGen"
              id="pFemale"
              required
              value={inputValue.gender}
              onChange={(e) =>
                setInputValue({ ...inputValue, gender: "Female" })
              }
            />
            <label htmlFor="pFemale">Female</label>
          </div>

          <div className="fItem">
            <label htmlFor="pNat">Nationality</label>
            <br />
            <input
              type="text"
              name="pNat"
              id="pNat"
              placeholder="Enter patient's nationality"
              value={inputValue.nationality}
              onChange={(e) =>
                setInputValue({ ...inputValue, nationality: e.target.value })
              }
            />
          </div>
          <div className="fItem">
            <label>Existing Ailments</label>
            <br />
            <input
              type="checkbox"
              name="cough"
              id="cough"
              checked={inputValue.symp.cough}
              onChange={(e) =>
                setInputValue({
                  ...inputValue,
                  symp: { ...inputValue.symp, cough: e.target.checked },
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
                  symp: { ...inputValue.symp, cold: e.target.checked },
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
                  symp: { ...inputValue.symp, stomachache: e.target.checked },
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
                  symp: { ...inputValue.symp, headache: e.target.checked },
                })
              }
            />
            <label htmlFor="headache">Head Ache</label>
            <br />
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
