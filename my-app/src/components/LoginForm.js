import { getToken, getUser } from "../utils/apiFetch";
import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loggedIn } from "../redux/actions";
import { getUserData } from "../redux/actions";
import { useNavigate } from "react-router";

export default function LoginForm() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  let navigate = useNavigate();

  //error div
  const emailError = document.querySelector(".email_error");
  const passwordError = document.querySelector(".password_error");
  const messageError = document.querySelector(".message_error");

  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.loggedReducer);

  const handleSubmit = async (e) => {
    e.preventDefault();

    //Error messages
    if (!email) emailError.innerHTML = `Please enter an email`;
    else emailError.innerHTML = "";
    if (!password) passwordError.innerHTML = `Please enter a password`;
    else passwordError.innerHTML = "";

    const user = { email, password };
    console.log(user);

    //user  logged in
    const dataToken = await getToken(user);
    console.log(dataToken);

    //store token in local Storage if user logged in successful
    if (dataToken.status === 200) {
      localStorage.setItem("token", dataToken.body.token);
    } else {
      messageError.innerHTML = "Invalid user";
    }

    const token = localStorage.getItem("token");

    //got user profile data

    if (token) {
      const dataUser = await getUser(token);
      console.log(dataUser);
      dispatch(getUserData(dataUser.body.firstName, dataUser.body.lastName));
      dispatch(loggedIn());
      console.log(dataUser.body.firstName);
      console.log(dataUser.body.lastName);
      return navigate("/user");
    }
  };

  // if (isLogged) {
  //   return navigate("/user");
  // }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-wrapper">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="email_error"></p>
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="password_error"></p>
      </div>
      <div className="input-remember">
        <input type="checkbox" id="remember-me"/>
        <label htmlFor="remember-me">Remember me</label>
      </div>
      <button className="sign-in-button">Sign In</button>
      <p className="message_error"></p>
    </form>
  );
}
