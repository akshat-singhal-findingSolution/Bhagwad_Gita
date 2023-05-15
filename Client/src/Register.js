import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { authContext } from "./components/context/AuthContext/AuthContext";
import Header from "./Header";
import "./Register.css";
const Register = () => {
  const { registerUserAction, error } = useContext(authContext);
  //form data
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  //Destructure
  const { fullName, email, password } = formData;

  //onChange
  const onChangeInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //Handle submit
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!email || !password || !fullName) {
      return alert("Please provide all details");
    }
    registerUserAction(formData);
  };

  return (
    <>
      <Header />
      <div className="parent-login">
        <div className="child1-border">
          <div className="child2-head">
            <h1>Sign Up</h1>
            <p>Please enter your details</p>
          </div>

          {error && (
            <div className="err-display">
              <p>User Already Exists!!</p>
            </div>
          )}
          <form onSubmit={onSubmitHandler}>
            <div className="child2-details">
              <label className="child2-label" htmlFor="fullName">
                {" "}
                Name{" "}
              </label>
              <input
                onChange={onChangeInput}
                value={fullName}
                name="fullName"
                className="child2-fullName"
                type="text"
                placeholder="Enter your name"
              />
            </div>

            <div className="child3-details">
              <label className="child3-label" htmlFor="email">
                {" "}
                Email{" "}
              </label>
              <input
                onChange={onChangeInput}
                value={email}
                name="email"
                className="child3-email"
                type="text"
                placeholder="Enter your email"
              />
            </div>
            <div className="child4-details">
              <label className="child4-label" htmlFor="password">
                {" "}
                Password{" "}
              </label>
              <input
                value={password}
                onChange={onChangeInput}
                name="password"
                className="child4-password"
                type="password"
                placeholder="*********"
              />
            </div>
            <div className="child5-details">
              <button className="child5-btn" type="submit">
                Sign Up
              </button>
            </div>
            <div className="child6">
              <span>Already have an account? </span>
              <Link to="/login">Sign In</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
