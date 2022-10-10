import axios from "axios";
import React, { useState } from "react";
import "./Login.css";
import { notifySuccess, notifyError } from "../toast";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    if (username === "" || password === "") {
      notifyError("Please enter username and password");
    }

    axios
      .post("http://localhost:8084/login", {
        userName: username,
        password: password,
      })
      .then(function (res) {
        if (res.data.success === true) {
          console.log(res.data);
          notifySuccess("Logged in successfully");
        } else {
          notifyError("Invalid credentials !");
        }
      })
      .catch(function (error) {
        console.log(error.message);
        notifyError("Invalid credentials !");
      });
  };
  return (
    <>
      <div className="login-form">
        <form onSubmit={submitHandler}>
          <div className="avatar">
            <i className="material-icons">&#xE7FF;</i>
          </div>
          <h4 className="modal-title">Login to Your Account</h4>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              required="required"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              required="required"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <input
            type="submit"
            className="btn btn-primary btn-block btn-lg"
            value="Login"
          />
        </form>
      </div>
    </>
  );
};

export default Login;
