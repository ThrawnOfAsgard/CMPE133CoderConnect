import React from "react";
import { useNavigate } from "react-router-dom"; 
import "./register.scss"; 
import logo from "./CoderConnectLogo3.png"; 

const Register = () => {
  const navigate = useNavigate(); 

  const handleLoginClick = () => {
    navigate("/"); 
  };

  return (
    <div className="register">
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
            <span>Already have an Account?</span>
            <button onClick={handleLoginClick}>Go to Login</button> {/* Update the button */}
          </div>
          <div className="right">
            <h1>Register</h1>
            <form>
              <input type="text" placeholder="Username" required />
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
