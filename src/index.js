import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./views/Home";
import { Login } from "./views/Login";
import { Signup } from "./views/Signup";
import { Profile } from "./views/profile";
import { Chat } from "./views/Chat";
import { Artwork } from "./views/Artwork";
import { EditArtwork } from "./views/EditArtwork";
import { UploadImage } from "./views/UploadImage";
import { EditProfile } from "./views/EditProfile";
import { ConfirmSuscription } from "./views/ConfirmSuscription";
import { MyArtwork } from "./views/MyArtwork";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./assets/custom.css";
import "./assets/msger.css";
import "./assets/radios.css";
import "./assets/cutebutton.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <div>
        <Router>
            <Switch>
                <Route path="/Home">
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
                <Route path="/Profile/:userId">
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
                <Route path="/Artwork/:drawId">
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
                <Route path="/ConfirmSuscription">
                    <Navbar></Navbar>
                    <ConfirmSuscription></ConfirmSuscription>
                </Route>
                <Route path="/MyArtwork/:userId">
                    <Navbar></Navbar>
                    <MyArtwork></MyArtwork>
                    <Footer></Footer>
                </Route>
                <Route path="/EditArtwork/:drawId">
                    <Navbar></Navbar>
                    <br /> 
                    <EditArtwork></EditArtwork>
                    <Footer></Footer>
                </Route>                
            </Switch>
        </Router>
    </div>
);
