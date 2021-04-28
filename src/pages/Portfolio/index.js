import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./portfolio.css";
import Project from "../../components/Project";
import portfolioData from "../../portfolio-data";

const Portfolio = () => {
  const [currentProject, setCurrentProject] = useState(0);

  return (
    <div
      className="animate__animated animate__fadeInUpBig row justify-content-center"
      id="portfolio"
    >
      <div className="col portfolio">
        <h1>Recent Projects</h1>
        <div>
          <div>
            <Project project={portfolioData[currentProject]} />
            <Link
              className="carousel-control-prev"
              id="arrow"
              data-slide="prev"
              to="/portfolio"
              onClick={() =>
                currentProject > 0
                  ? setCurrentProject(currentProject - 1)
                  : setCurrentProject(portfolioData.length - 1)
              }
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </Link>
            <Link
              className="carousel-control-next arrow"
              data-slide="next"
              to="/portfolio"
              onClick={() =>
                currentProject < portfolioData.length - 1
                  ? setCurrentProject(currentProject + 1)
                  : setCurrentProject(0)
              }
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
