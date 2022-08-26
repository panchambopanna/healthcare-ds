import React, { useEffect, useState } from "react";
import "./Doctor.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUserPlus,
  faClose,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import Pop from "../pop/Pop";
import { useSelector } from "react-redux";
import Aside from "../aside/Aside";
import dDb from "../../db/doctor.json";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { addPresNew, deletePatient } from "../../redux/patientSlice";

const Doctor = () => {
  const [info, setInfo] = useState(false);
  const [sText, setsText] = useState();
  const [patient, setPatient] = useState(null);
  const [newPres, setnewPres] = useState({ txt: "", visitDt: "" });
  const patients = useSelector((state) => state.patient.patients);
  const userInfo = useSelector((state) => state.user.userType);
  const dispatch = useDispatch();

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
    notify3();
  };
  const addPatient = () => {
    console.log("Adding patient");
    setsText(); //might have to remove later
    setInfo(true);
  };

  const displayToggle = (index) => {
    let x = document.getElementsByClassName("detail")[index];
    let y = document.getElementsByClassName("arrow")[index];
    x.style.display === "block"
      ? (x.style.display = "none")
      : (x.style.display = "block");
    y.style.transform === "rotate(90deg)"
      ? (y.style.transform = "rotate(0deg)")
      : (y.style.transform = "rotate(90deg)");
  };

  const togglePres = () => {
    let x = document.querySelector(".addPresPop");
    x.style.display === "block"
      ? (x.style.display = "none")
      : (x.style.display = "block");

    let y = document.querySelector("#addPres");
    y.getAttribute("disabled")
      ? y.removeAttribute("disabled")
      : y.setAttribute("disabled", true);
  };
  function notify3() {
    toast.error("No data found, check id/name entered", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  }

  const notify2 = () => {
    toast.success("Prescription added.", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  };

  const handlePresSubmit = (e) => {
    e.preventDefault();
    let newpatient = {
      ...patient,
      pres: [
        ...patient.pres,
        {
          txt: newPres.txt,
          visitDt: new Date().toDateString(),
        },
      ],
    };
    newpatient = { ...newpatient, nVisit: newPres.visitDt };
    setPatient(newpatient);
    setnewPres({ txt: "", visitDt: "" });
    togglePres();
    dispatch(addPresNew(newpatient));
    notify2();
  };

  const notify = () => {
    toast.success("Patient has been added!👍", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
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
        <ToastContainer />
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
            {Object.values(patient.symp).includes(true) && (
              <div>
                <b>Symptoms</b>: {patient.symp?.cough && <span>Cough</span>}{" "}
                {patient.symp?.cold && <span>Cold</span>}{" "}
                {patient.symp?.stomachache && <span> Stomach Ache</span>}
                {patient.symp?.headache && <span> Headache</span>}
              </div>
            )}
            {patient.pres.length !== 0 && (
              <div>
                <b>History</b>: <br />
                {patient.pres?.map((e, index) => (
                  <div
                    key={index}
                    className="Doctor__history--card"
                    onClick={() => {
                      displayToggle(index);
                    }}
                  >
                    <span>
                      <FontAwesomeIcon
                        className="arrow"
                        icon={faChevronCircleRight}
                      />
                    </span>
                    <small>{e.visitDt}</small>
                    <p className="detail">{e.txt}</p>
                  </div>
                ))}
              </div>
            )}
            {/* Add prescription section */}
            <div className="formAddPres">
              <button
                id="addPres"
                onClick={() => {
                  togglePres();
                }}
              >
                Add Prescription
              </button>
              <form className="addPresPop" onSubmit={handlePresSubmit}>
                <label htmlFor="pPres">Prescription: </label>
                <textarea
                  name="pPres"
                  id="pPres"
                  rows={5}
                  value={newPres.txt}
                  onChange={(e) => {
                    setnewPres({ ...newPres, txt: e.target.value });
                  }}
                ></textarea>
                <label htmlFor="nDate">Next Visit Date: </label>
                <input
                  type="date"
                  name="nDate"
                  id="nDate"
                  value={newPres.visitDt}
                  onChange={(e) => {
                    setnewPres({ ...newPres, visitDt: e.target.value });
                  }}
                />
                <br />
                <br />
                <button type="submit">Add</button>
                <button
                  type="cancel"
                  onClick={(e) => {
                    e.preventDefault();
                    togglePres();
                  }}
                >
                  Cancel
                </button>
              </form>
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
          <Pop setInfo={setInfo} fn={notify} />
        )}
      </div>
    </div>
  );
};

export default Doctor;
