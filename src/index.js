import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./views/Home";
import { Login } from "./views/Login";
import { Signup } from "./views/Signup";
import { Profile } from "./views/profile";
import { Chat } from "./views/Chat";
import { Artwork } from "./views/Artwork";
import { UploadImage } from "./views/UploadImage";
import { EditProfile } from "./views/EditProfile";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./assets/custom.css";
import "./assets/msger.css";
import "./assets/radios.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <div>
        <Router>
            <Switch>
                <Route path="/home">
                    <Navbar ></Navbar>
                    <br />
                    <Home> </Home>
                    <Footer></Footer>
                </Route>
                <Route path="/Login">
                    <Login></Login>
                </Route>
                <Route path="/Signup">
                    <Signup></Signup>
                </Route>
                <Route path="/Profile">
                    <Navbar></Navbar>
                    <br />
                    <Profile></Profile>
                    <Footer></Footer>
                </Route>
                <Route path="/EditProfile">
                    <Navbar></Navbar>
                    <br/>
                    <EditProfile></EditProfile>
                    <Footer></Footer>
                </Route>
                <Route path="/UploadImage">
                    <Navbar></Navbar>
                    <br />
                    <UploadImage></UploadImage>
                    <Footer></Footer>
                </Route>
                <Route path="/Artwork">
                    <Navbar></Navbar>
                    <br />
                    <Artwork></Artwork>
                    <Footer></Footer>
                </Route>
                <Route path="/Chat">
                    <Navbar></Navbar>
                    <br /> 
                    <Chat></Chat>
                </Route>
            </Switch>
        </Router>
    </div>
);
