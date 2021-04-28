import burgerTime from "../images/burger-time.png";
import puppyParty from "../images/puppy-party.png";
import vaxTrax from "../images/vax-trax-landing.png";
import quizTime from "../images/quiz-time.png";
import weatherTravel from "../images/weather-travel.png";
import dayPlanner from "../images/work-day-scheduler.png";

const portfolioData = [
  {
    name: "Burger Time",
    description: "This app is about burgers",
    image: burgerTime,
    githubLink: "https://github.com/jacob-af/burger-time",
    deployedLink: "https://rocky-cliffs-37100.herokuapp.com/"
  },
  {
    name: "Weather Travel",
    description: "A colorful weather dashboard using Open Weather API",
    image: weatherTravel,
    githubLink: "https://github.com/jacob-af/weather-travel",
    deployedLink: "https://www.jacobaf.com/weather-travel/"
  },
  {
    name: "Puppy Party",
    description: "Schedule all your trips to the Dog Park",
    image: puppyParty,
    githubLink: "https://github.com/jacob-af/Puppy-Party-Planner",
    deployedLink: "https://www.jacobaf.com/Puppy-Party-Planner/"
  },
  {
    name: "Quiz Time",
    description: "Timed quiz covering some JavaScript basics",
    image: quizTime,
    githubLink: "https://github.com/jacob-af/quiz-time",
    deployedLink: "https://www.jacobaf.com/quiz-time/"
  },
  {
    name: "Day Planner",
    description: "Work Day Planner using Local Storage",
    image: dayPlanner,
    githubLink: "https://github.com/jacob-af/day-planner",
    deployedLink: "https://www.jacobaf.com/day-planner/"
  },
  {
    name: "Vax Trax",
    description:
      "A full stack web application for staying informed on Covid-19 data and sharing personal experience with vaccination",
    image: vaxTrax,
    githubLink: "https://github.com/jacob-af/vax-trax",
    deployedLink: "https://vax-trax.herokuapp.com/"
  }
];

export default portfolioData;
