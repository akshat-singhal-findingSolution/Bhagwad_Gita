import React, { useContext } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "./images/logo .png";
import msg from "./images/msg.png";
import { authContext } from "./components/context/AuthContext/AuthContext";

const Header = () => {
  const { logoutUserAction, token } = useContext(authContext);
  return (
    <>
      <div className="parent">
        <div className="child-1">
          <img src={msg} alt="" className="pic1" />
        </div>
        <div className="child-2">
          <h1>Bhagwad Gita</h1>
          <img src={logo} alt="" className="pic2" />
        </div>

        <div className="child-4">
          <Link to="/" className="l1">
            Home
          </Link>
          {token && (
            <Link to="/chapters" className="l2">
              Chapters
            </Link>
          )}
          {!token && (
            <Link to="/login" className="l3">
              Login
            </Link>
          )}
          {!token && (
            <Link to="/register" className="l4">
              Register
            </Link>
          )}
          {token && (
            <button onClick={logoutUserAction} className="logout-btn">
              Logout
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
