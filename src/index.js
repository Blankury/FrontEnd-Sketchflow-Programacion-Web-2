import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import { Home } from "./views/Home";
import { Login } from "./views/Login";
import { Signin } from "./views/Signin";
import { UpdateImage } from "./views/UpdateImage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./assets/custom.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    <Router>
      <Switch>
        <Route path="/">
          <Home></Home>
        </Route>
        <Route path="/Login">
          <Login></Login>
        </Route>
        <Route path="/Signin">
          <Signin></Signin>
        </Route>
        <Route path="/UpdateImage">
          <UpdateImage></UpdateImage>
        </Route>
      </Switch>
    </Router>
  </div>
);
