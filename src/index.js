import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./views/Home";
import { Login } from "./views/Login";
import { Signin } from "./views/Signin";
import { Profile } from "./views/Profile";
import { UploadImage } from "./views/UploadImage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./assets/custom.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <div>
        <Router>
            <Switch>
                <Route path="/home">
                    <Navbar></Navbar>
                    <br />
                    <Home> </Home>
                </Route>
                <Route path="/Login">
                
                    <Login></Login>
                </Route>
                <Route path="/Signin">
                    <Signin></Signin>
                </Route>
                <Route path="/Profile">
                    <Navbar></Navbar>
                    <br />
                    <Profile></Profile>
                </Route>
                <Route path="/UploadImage">
                    <Navbar></Navbar>
                    <br />
                    <UploadImage></UploadImage>
                </Route>
            </Switch>
        </Router>
    </div>
);
