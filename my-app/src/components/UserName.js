import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { updateProfile } from "../utils/apiFetch";
import { getUserData } from "../redux/actions";

export default function UserName() {
  const [newFirstName, setNewFirstName] = useState();
  const [newLastName, setNewLastName] = useState();
  const [isEditing, setIsEditing] = useState(false);
  let navigate = useNavigate();

  const isLogged = useSelector((state) => state.loggedReducer);
  const dataUser = useSelector((state) => state.getUserReducer);

  const dispatch = useDispatch();

   const handleChange = () => {
    const token = localStorage.getItem("token");
    const newUser = updateProfile(token, newFirstName, newLastName);
    console.log(newUser);
    dispatch(
      getUserData(dataUser.body.newFirstName, dataUser.body.newLastName)
    );
    setIsEditing(false);
  };

  // dispatch(updateProfileData(newFirstName, newLastName));
  // console.log(dataUser);
  // setIsEditing(false);

  if (isLogged === false) {
    navigate("/login");
  }

  return (
    <div className="header">
      {isEditing ? (
        <div className="userEdit">
          <h1>
            Welcome back
            <br />
          </h1>
          <div className="names-edit">
            <input
              type="firstname"
              id="firstname"
              placeholder={dataUser.firstName}
              onChange={(e) => setNewFirstName(e.target.value)}
            />
            <input
              type="lastname"
              id="lastname"
              placeholder={dataUser.lastName}
              onChange={(e) => setNewLastName(e.target.value)}
            />
          </div>
          <div className="buttons-edit">
            <button className="button-save" onClick={handleChange}>
              Save
            </button>
            <button
              className="button-cancel"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div>
          <h1>
            Welcome back
            <br />
            <div className="userName">
              {dataUser.firstName} {dataUser.lastName}!
            </div>
          </h1>
          <button
            onClick={() => {
              setIsEditing(true);
            }}
            className="edit-button"
          >
            Edit Name
          </button>
        </div>
      )}
    </div>
  );
}
