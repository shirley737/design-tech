import React from "react";
import "./App.scss";
import Main from "./Components/Main";
import Content from "./Components/Content";
import Nav from "./Components/Nav";
import Intro from "./Components/Intro";

function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
      <Intro />
      <Content />
    </div>
  );
}

export default App;
