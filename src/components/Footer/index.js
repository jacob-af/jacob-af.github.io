import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer text-center fixed-bottom p-2">
      <Link
        to="https://www.facebook.com/Inflammable"
        target="_blank"
        className="fa fa-facebook icon-link"
      ></Link>
      <Link
        to="https://www.instagram.com/jacob.af/"
        target="_blank"
        className="fa fa-instagram icon-link"
      ></Link>
      <Link
        to="https://www.linkedin.com/in/jacobaf/"
        target="_blank"
        className="fa fa-linkedin icon-link"
      ></Link>
      <Link
        to="https://github.com/jacob-af"
        target="_blank"
        className="fa fa-github icon-link"
      ></Link>
      <Link to="https://www.jacobaf.com" className="name-link float-right">
        &copy; jacob a feitler 2020
      </Link>
    </footer>
  );
};

export default Footer;
