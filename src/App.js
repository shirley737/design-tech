import React from "react";
import "./App.scss";
import "./Components/Nav.scss";
import Main from "./Components/Main";
import Contact from "./Components/Contact";
import About from "./Components/About";
import News from "./Components/News";
import People from "./Components/People";
import Newsletter from "./Components/Newsletter";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useEffect } from "react";
import Divider from "./utilities/Divider/Divider";

function Homepage() {

  function Nav() {
    return (
      <div className="nav-wrapper">
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
            <a className="nav-righttext" href="/news">
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
      <Divider />
      <div id="people">
        <People />
      </div>
      <Divider />
      <div id="newsletter">
        <Newsletter />
      </div>
      <Divider />
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
      <Route exact path="/news" component={Newspage} />;
    </Router>
  );
}

export default App;
