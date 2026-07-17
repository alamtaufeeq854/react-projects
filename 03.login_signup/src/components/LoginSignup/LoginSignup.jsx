import React, { useState } from "react";
import "./LoginSignup.css";
import email from "../Assets/mail.png";
import password from "../Assets/password.png";
import user from "../Assets/person.png";

export const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? (
          <div></div>
        ) : (
          <div className="input">
            <img src={user} alt="" />
            <input type="text" placeholder="Username" />
          </div>
        )}
        <div className="input">
          <img src={email} alt="" />
          <input type="email" placeholder="Email ID" />
        </div>
        <div className="input">
          <img src={password} alt="" />
          <input type="password" placeholder="Password" />
        </div>
      </div>
      {action === "Sign Up" ? (
        <div className="switch">
          Already Have Account ?
          <span
            onClick={() => {
              setAction("Login");
            }}>
            Click Here
          </span>
        </div>
      ) : (
        <div className="switch">
          To Create New Account:
          <span
            onClick={() => {
              setAction("Sign Up");
            }}>
            Click Here
          </span>
        </div>
      )}
      <div className="submit-container">
        <div
          onClick={() => {
            setAction("Sign Up");
          }}
          className={action === "Login" ? "submit gray" : "submit"}>
          Sign Up
        </div>
        <div
          onClick={() => {
            setAction("Login");
          }}
          className={action === "Sign Up" ? "submit gray" : "submit"}>
          Login
        </div>
      </div>
    </div>
  );
};
