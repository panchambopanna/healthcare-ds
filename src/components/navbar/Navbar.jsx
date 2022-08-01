import logo from "../../assets/logo/logo_3ds.png";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="Navbar">
      <img src={logo} alt="Dassault Sytemes" />

      {/*  use redux auth here */}
      {localStorage.getItem("auth") === "true" ? (
        <div className="loggedIn">
          <div className="profile">
            <FontAwesomeIcon
              icon={faUserCircle}
              size="lg"
              inverse
            ></FontAwesomeIcon>
          </div>
          <button
            id="logoutBtn"
            type="button"
            onClick={() => {
              localStorage.setItem("auth", false); //to be remobed and moved to redux
              navigate("/");
            }}
          >
            Logout
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Navbar;
