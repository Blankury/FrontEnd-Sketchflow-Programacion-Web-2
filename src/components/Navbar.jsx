import isotipo from "../assets/images/isotipo.png";
import logo from "../assets/images/sketchflow_logo.png";
import sketchflow from "../assets/images/sketchflow.png";

import { Link } from "react-router-dom";


export function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light colorPrimary position-fixed vw-100" >

            <div className="container-fluid">
                <Link to="/Home" className="navbar-brand text-white" href="#">
                    <img src={isotipo} alt="" width="35" height="35" className="d-inline-block align-text-top" />
                    <img src={sketchflow} alt="" height="35" className="d-inline-block align-text-top" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <form className="d-flex mx-auto px-5">
                        <input className="form-control me-2 searchbar" type="search" placeholder="Search" aria-label="Search" />
                        <button className="yellowbutton " type="submit">Buscar</button>
                    </form>

                    <Link to="/UploadImage"> <button className="redbutton px-5" type="button">Publicar</button> </Link>

                    <ul className="navbar-nav px-2 pe-2 mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/Chat" className="dropdown-item Link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" className="nav-link nav-icon bi bi-chat-square-dots-fill" viewBox="0 0 16 16">
                                    <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.5a1 1 0 0 0-.8.4l-1.9 2.533a1 1 0 0 1-1.6 0L5.3 12.4a1 1 0 0 0-.8-.4H2a2 2 0 0 1-2-2V2zm5 4a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                </svg>
                            </Link>
                        </li>
                        <li className="nav-item ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" className="nav-link  bi bi-bell-fill nav-icon" viewBox="0 0 16 16">
                                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                            </svg>
                        </li>
                    </ul>

                    <div className="nav-item dropdown ">
                        <a className="nav-link dropdown-toggle text-white pe-2" href="#" id="navbarDropdown" role="button" data-bs-toggle='dropdown' aria-expanded="false">
                            <label className="pe-3 ">Usuario 4545</label>

                            <img src={isotipo} alt="" width="35" height="35" className="borderimg d-inline-block align-text-top " />
                        </a>
                        <ul className="dropdown-menu " aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="#"> Configuración </a></li>
                            <li><Link to="/Profile" className="dropdown-item"> Perfil</Link></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><Link to="/login" className="dropdown-item">Cerrar sesión</Link> </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}
