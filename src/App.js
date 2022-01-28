import React from "react";
import "./App.scss";
import "./Components/Nav.scss";
import Main from "./Components/Main";
import Contact from "./Components/Contact";
// import Nav from "./Components/Nav";
import About from "./Components/About";
import News from "./Components/News";
import People from "./Components/People";
import Newsletter from "./Components/Newsletter";
import { useHistory } from "react-router-dom";

import { BrowserRouter as Router, Route } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { useEffect } from "react";

function Homepage() {
  function Nav() {
    return (
      <div className="header">
        <div
          className="nav"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="nav-lefttext">Design Tech Club</div>
          <div>
            <a className="nav-righttext" href="#people">
              People
            </a>
            <a className="nav-righttext" href="#newsletter">
              Newsletters
            </a>
            <a className="nav-righttext" href="#contact">
              Contact
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="homepage">
      <Nav />
      <Main />
      <About />
      <div id="people">
        <People />
      </div>
      <div id="newsletter">
        <Newsletter />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

function Newspage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const history = useHistory();
  return (
    <div className="news">
      <div
        className="return"
        onClick={() => {
          history.push("/");
        }}
      >
        {"<"} Go Back
      </div>
      <News />
      <Contact />
    </div>
  );
}

function App() {
  return (
    <Router basename="/">
      <Route exact path="/" component={Homepage} />;
      <Route path="/news" component={Newspage} />;
    </Router>
  );
}

export default App;
