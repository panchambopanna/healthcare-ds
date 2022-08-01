import logo from "../../assets/logo/logo_3ds.png";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { clearUser } from "../../redux/userSlice";
import { logout } from "../../redux/authSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuth);
  return (
    <div className="Navbar">
      <img src={logo} alt="Dassault Sytemes" />

      {/*  use redux auth here */}
      {isAuth ? (
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
              dispatch(logout());
              dispatch(clearUser());
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
