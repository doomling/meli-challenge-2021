import ReactDOM from "react-dom";
import React from "react";
import "./style.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/home.js";
import Results from "./pages/results";
import Product from "./pages/product";

const App = () => {
  return (
    <Router>
      <Home>
        <Switch>
          <Route path="/items/:id" component={Product}></Route>
          <Route path="/items" component={Results}></Route>
        </Switch>
      </Home>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
