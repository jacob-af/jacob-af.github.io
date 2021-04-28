import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer text-center fixed-bottom p-2">
      <Link
        to="https://www.facebook.com/Inflammable"
        target="_blank"
        className="fa fa-facebook"
      ></Link>
      <Link
        to="https://www.instagram.com/jacob.af/"
        target="_blank"
        className="fa fa-instagram"
      ></Link>
      <Link
        to="https://www.linkedin.com/in/jacobaf/"
        target="_blank"
        className="fa fa-linkedin"
      ></Link>
      <Link
        to="https://github.com/jacob-af"
        target="_blank"
        className="fa fa-github"
      ></Link>
      <Link to="https://www.jacobaf.com" className="name-link float-right">
        &copy; jacob A feitler 2020
      </Link>
    </footer>
  );
};

export default Footer;
