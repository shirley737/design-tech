import React from "react";
import "./App.scss";
import Main from "./Components/Main";
import Contact from "./Components/Contact";
import Nav from "./Components/Nav";
import Intro from "./Components/Intro";
import News from "./Components/News";
import { useHistory } from "react-router-dom";

import { BrowserRouter as Router, Route } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { useEffect } from "react";

function Homepage() {
  return (
    <div className="homepage">
      <Nav />
      <Main />
      <Intro />
      <Contact />
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
