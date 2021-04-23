import React from "react";
import "./App.scss";
import Main from "./Components/Main";
import Contact from "./Components/Contact";
import Nav from "./Components/Nav";
import Intro from "./Components/Intro";
import News from "./Components/News";

function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
      <Intro />
      <News />
      <Contact />
    </div>
  );
}

export default App;
