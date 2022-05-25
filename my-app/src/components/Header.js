import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/argentBankLogo.png";
import { useSelector, useDispatch } from "react-redux";
import { loggedOut } from "../redux/actions";

export default function Header() {
  const isLogged = useSelector((state) => state.loggedReducer);
  const userName = useSelector((state) => state.getUserReducer);
  const dispatch = useDispatch();

  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {isLogged ? (
          <div>
            <div className="main-nav-item">
              <i className="fa fa-user-circle"></i>
              {userName.firstName}
            </div>
            <NavLink
              to="/"
              className="main-nav-item"
              onClick={() => {
                window.localStorage.clear();
                dispatch(loggedOut());
              }}
            >
              <i className="fa fa-sign-out"></i>
              Sign Out
            </NavLink>
          </div>
        ) : (
          <Link to="login" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
}
