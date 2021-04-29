import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer text-center fixed-bottom p-2">
      <a
        href="https://www.facebook.com/Inflammable"
        target="_blank"
        className="fa fa-facebook icon-link"
      ></a>
      <a
        href="https://www.instagram.com/jacob.af/"
        target="_blank"
        className="fa fa-instagram icon-link"
      ></a>
      <a
        href="https://www.linkedin.com/in/jacobaf/"
        target="_blank"
        className="fa fa-linkedin icon-link"
      ></a>
      <a
        href="https://github.com/jacob-af"
        target="_blank"
        className="fa fa-github icon-link"
      ></a>
      <a href="https://www.jacobaf.com" className="name-link float-right">
        &copy; jacob a feitler 2020
      </a>
    </footer>
  );
};

export default Footer;
