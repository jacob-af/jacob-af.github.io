import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const [show, setShow] = useState("");

  const location = useLocation();

  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <span className="navbar-brand pl-2">Jacob A. Feitler</span>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => (show === "" ? setShow("show") : setShow(""))}
        >
          <span>
            <i className="fa fa-flask"></i>
          </span>
        </button>
        <div
          className={`collapse navbar-collapse justify-content-end ${show}`}
          id="mainNav"
        >
          <ul className="nav navbar-nav">
            <li className="nav-item">
              <Link
                className={
                  location.pathname === "/"
                    ? "nav-link text-right active"
                    : "nav-link text-right"
                }
                to="/"
                onClick={() => setShow("")}
              >
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={
                  location.pathname === "/portfolio"
                    ? "nav-link text-right active"
                    : "nav-link text-right"
                }
                to="/portfolio"
                onClick={() => setShow("")}
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={
                  location.pathname === "/contact"
                    ? "nav-link text-right active"
                    : "nav-link text-right"
                }
                to="/contact"
                onClick={() => setShow("")}
              >
                Connect
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
