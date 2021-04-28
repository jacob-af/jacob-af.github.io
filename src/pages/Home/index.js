import React from "react";
import headshot from "../../images/headshot-from-cocktail-shot.png";

const Home = () => {
  return (
    <div className="animate__animated animate__fadeInLeft row" id="profile">
      <div className="col">
        <img
          src={headshot}
          className="img-fluid"
          id="headshot"
          alt="headshot"
        />
        <p className="bio">
          I am a Full Stack Web Developer excited to use my skills in efficient
          problem solving, structured teamwork, and pragmatic design to create
          web applications that are equally functional and beautiful. In my
          previous career in restaurants and hospitality, the ability to ‘Figure
          it out, make it work, and move forward” was paramount to my success.
          I'm excited to bring new and more exciting projects as I develop
          further skills in web development.
        </p>
        <p>cheers,</p>
        <h2 className="sig">Jacob</h2>
      </div>
    </div>
  );
};

export default Home;
