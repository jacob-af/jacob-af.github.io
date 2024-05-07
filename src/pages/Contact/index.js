import "./contact.css";

import { Link } from "react-router-dom";
import React from "react";

const Contact = () => {
  return (
    <div className="row animate__animated animate__fadeInRight" id="contact">
      <div className="col contact">
        <h1>Connect</h1>
        <div>
          <Link
            to="mailto:jfeitler@gmail.com"
            target="_blank"
            className="fa fa-envelope"
            rel="noreferrer"
          >
            <span>: jfeitler@gmail.com</span>
          </Link>
        </div>
        <div>
          <Link
            to="https://www.facebook.com/Inflammable"
            target="_blank"
            className="fa fa-facebook"
            rel="noreferrer"
          >
            <span>: facebook.com/Inflammable</span>
          </Link>
        </div>
        <div>
          <Link
            to="https://www.instagram.com/jacob.af/"
            target="_blank"
            className="fa fa-instagram"
            rel="noreferrer"
            v
          >
            <span>: instagram/jacob.af</span>
          </Link>
        </div>
        <div>
          <Link
            to="https://www.linkedin.com/in/jacobaf/"
            target="_blank"
            className="fa fa-linkedin"
            rel="noreferrer"
          >
            <span>: linkedin/in/jacobaf</span>
          </Link>
        </div>
        <div>
          <Link
            to="https://github.com/jacob-af"
            target="_blank"
            className="fa fa-github"
            rel="noreferrer"
          >
            <span>: github.com/jacob-af</span>
          </Link>
        </div>
        <div>
          <a
            href={process.env.PUBLIC_URL + "./JacobFeitlerResume0524.pdf"}
            className="fa fa-file"
            download="JacobFeitlerResume0524"
          >
            <span>: Download PDF Resume</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
