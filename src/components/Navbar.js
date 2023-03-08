import "../styles/NavbarFooter.css";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import img1 from "../img/logo.png";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid p-2">
          <Link className="navbar-brand" to="/">
            <img src={img1} alt="Avatar Logo" className="rounded-pill logoo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item nav-item1">
                <NavLink className="nav-link nav-link1 p-2" to="/">
                  <i className="fas fa-home"></i>&nbsp;Home
                </NavLink>
              </li>
              <li className="nav-item nav-item1">
                <NavLink className="nav-link nav-link1 p-2" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item nav-item1 dropdown">
                <NavLink className="nav-link nav-link1 p-2" to="/service">
                  Service&nbsp;<i className="fas fa-caret-down"></i>
                </NavLink>
                <ul className="dropdown-menu dropdown-menu1 p-2">
                  <li>
                    <Link
                      className="dropdown-item nav-link nav-link2"
                      to="./officebuilding"
                    >
                      Office Building
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item nav-link nav-link2"
                      to="./service/"
                    >
                      Public Shower
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item nav-link nav-link2"
                      to="./service/industrialconstruction.html"
                    >
                      Indestrial Construction
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item nav-link nav-link2"
                      to="./service/public_infrastructure.html"
                    >
                      Public Infrastructure
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item nav-link nav-link2"
                      to="./service/housedevelopment.html"
                    >
                      House Development
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item nav-link nav-link2" to="#">
                      University
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item nav-item1">
                <NavLink className="nav-link nav-link1 p-2" to="/projects">
                  Projects
                </NavLink>
              </li>
              <li className="nav-item nav-item1">
                <NavLink className="nav-link nav-link1 p-2" to="/team">
                  Team
                </NavLink>
              </li>
              <li className="nav-item nav-item1">
                <Link
                  className="nav-link nav-link1 p-2 btn btn-primary1"
                  to="/contact"
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
