import React, { useEffect, useState } from "react";
import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserDoctor,
  faHospitalUser,
  faPills,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux/es/exports";
import { setUser } from "../../redux/userSlice";
import { login } from "../../redux/authSlice";

const Card = ({ user }) => {
  const [userIcon, setusericon] = useState(faUserDoctor);
  useEffect(() => {
    if (user === "Doctor") setusericon(faUserDoctor);
    else if (user === "Patient") setusericon(faHospitalUser);
    else if (user === "Pharma") setusericon(faPills);
  }, [user]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //This is the call to Dashboard
  const callUser = (user) => {
    dispatch(login());
    dispatch(setUser(user));
    navigate("/dashboard");
  };

  return (
    <div className="Card">
      <FontAwesomeIcon icon={userIcon} size="10x" />
      <h3>{user}</h3>
      <button
        type="button"
        className="Card__login"
        onClick={() => callUser(user)}
      >
        Login
      </button>
    </div>
  );
};

export default Card;
