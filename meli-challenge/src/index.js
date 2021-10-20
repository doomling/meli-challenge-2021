import ReactDOM from "react-dom";
import React from "react";
import "./style.scss";
import Nav from "./components/Nav";

const App = () => {
  return <Nav />;
};

ReactDOM.render(<App />, document.getElementById("app"));
