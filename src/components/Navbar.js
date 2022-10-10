import React from "react";

import { BrowserRouter as Router, Link } from "react-router-dom";
import CenterList from "./CenterList";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand"></Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-md-auto gap-2">
              <li className="nav-item rounded">
                <Link className="nav-link active" aria-current="page" to="/">
                  <i className="bi bi-house-fill me-2"></i>Vaccination Center
                </Link>
              </li>
              <li className="nav-item rounded">
                <Link className="nav-link" to="registrations">
                  <i className="bi bi-people-fill me-2"></i>Registrations
                </Link>
              </li>
              <li className="nav-item rounded">
                <Link className="nav-link" to="staff">
                  <i className="bi bi-telephone-fill me-2"></i>Staffs
                </Link>
              </li>
              <li className="nav-item rounded">
                <Link className="nav-link" to="login">
                  <i className="bi bi-telephone-fill me-2"></i>Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
