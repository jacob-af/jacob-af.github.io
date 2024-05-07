import "./App.css";

import { Route, BrowserRouter as Router } from "react-router-dom";

import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="container pt-5">
        <Route exact path="/" component={Home} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
