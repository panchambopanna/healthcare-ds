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

const Card = ({ user, db }) => {
  const [userIcon, setusericon] = useState(faUserDoctor);
  const [id, setid] = useState(0);

  useEffect(() => {
    if (user === "Doctor") setusericon(faUserDoctor);
    else if (user === "Patient") setusericon(faHospitalUser);
    else if (user === "Pharmacist") setusericon(faPills);
  }, [user]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //This is the call to Dashboard
  const callUser = (user) => {
    dispatch(login());
    dispatch(setUser({ user, id }));
    navigate(`/${user.toLowerCase()}?id=${id}`);
  };

  return (
    <div className="Card">
      <FontAwesomeIcon icon={userIcon} size="10x" />
      <h3>{user}</h3>
      <select
        onChange={(e) => {
          setid(e.target.options.selectedIndex);
        }}
      >
        <option></option>
        {db?.map((e, index) => (
          <option key={index} data-key={index}>
            {e.name}
          </option>
        ))}
      </select>
      <button
        type="button"
        className="Card__login"
        onClick={() => callUser(user, db)}
        disabled={id === 0 || null ? true : false}
      >
        Login
      </button>
    </div>
  );
};

export default Card;
