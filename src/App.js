import React from "react";
import "./App.scss";
import Main from "./Components/Main";
import Contact from "./Components/Contact";
import Nav from "./Components/Nav";
import Intro from "./Components/Intro";
import News from "./Components/News";

import { BrowserRouter as Router, Route } from "react-router-dom";

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
  return (
    <div className="news">
      <Nav />
      <News />
      <Contact />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Route exact path="/" component={Homepage} />;
      <Route path="/news" component={Newspage} />;
    </Router>
  );
}

export default App;
