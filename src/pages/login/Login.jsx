import React from "react";
import { useNavigate } from "react-router-dom"; 
import "./login.scss";
import logo from "./CoderConnectLogo3.png"; 

const Login = () => {
  const navigate = useNavigate(); 

  const handleRegisterClick = () => {
    navigate("/register"); 
  };

  return (
    <div className="login">
      <aside className="sidebar">
        <div className="sidebar-header">
          <img src={logo} alt="Logo" />
          <h2>Coder Connect</h2>
        </div>
        <ul className="sidebar-links">
          <li>
            <a href="#">
              <span className="material-icons">dashboard</span>
              Dashboard
            </a>
          </li>
          <li>
            <a href="#">
              <span className="material-icons">info</span>
              About Us
            </a>
          </li>
        </ul>
      </aside>
      <div className="content">
        <div className="card">
          <div className="left">
            <h1>Welcome to Coder Connect!</h1>
            <span>Don't have an account?</span>
            <button onClick={handleRegisterClick}>Register</button> {}
          </div>
          <div className="right">
            <h1>Sign In</h1>
            <form>
              <input type="text" placeholder="Username" />
              <input type="password" placeholder="Password" />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
