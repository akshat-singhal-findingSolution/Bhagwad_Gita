import { useContext, useState } from "react";
import { authContext } from "./components/context/AuthContext/AuthContext";
import "./Login.css";
import Header from "./Header";
import { Link } from "react-router-dom";

const Login = () => {
  const { loginUserAction, error } = useContext(authContext);
  //form data
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  //onChnage
  const onChangeInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //submit
  const onSubmitHandler = (e) => {
    e.preventDefault();

    //dispatch action
    loginUserAction(formData);
  };
  // console.log(userAuth);

  return (
    <>
      <Header />
      <div className="parent-login">
        <div className="child1-border">
          <div className="child2-head">
            <h1>Login</h1>
            <p>Please enter your details</p>
          </div>

          {error && (
            <div className="err-display">
              <p>User Not Exists!!</p>
            </div>
          )}

          <form onSubmit={onSubmitHandler}>
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
                Sign In
              </button>
            </div>
            <div className="child6">
              <span>Don't have an account? </span>
              <Link to="/register">Sign Up</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
