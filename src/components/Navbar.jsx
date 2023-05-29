import isotipo from "../assets/images/isotipo.png";
import sketchflow from "../assets/images/sketchflow.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getLoggedUser, logOut } from "../apis/LogInApi";
import { useHistory } from "react-router-dom";

export function Navbar() {
    const [userName, setUserName] = useState("");
    const [profilePhoto, setProfilePhoto] = useState("");
    const history = useHistory();

    useEffect(() => {
        loader();
    }, []);
    
    async function loader(){
        const data = await getLoggedUser(localStorage.getItem("userId"), localStorage.getItem("token"));
        if(data.error === true){
            loadLogOut();
        }
        if(data === null){
            loadLogOut();
        }

        setUserName(data.userLog.userName);
        setProfilePhoto(data.userLog.profilePhoto);
    }

    async function loadLogOut(){
        const data = await logOut(localStorage.getItem("token"));
        const delay = ms => new Promise(
            resolve => setTimeout(resolve, ms)
        );
        
        await delay(1000);
        history.push("/login");
    }

    return (
        <div>
        
        <nav className="navbar navbar-expand-lg navbar-light colorPrimary position-fixed vw-100" style={{ zIndex: '5'}}>
        
            <div className="px-3" />
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
                    </ul>
                            
          
                    <div className="nav-item dropdown">
                        <a className="nav-link text-white pe-2" id="navbarDropdown" role="button" data-bs-toggle='dropdown' aria-expanded="false">
                            <label className="px-3" style={{fontSize: 20}}>{ userName }</label>
                            <img src={ profilePhoto } alt="" width="35" height="35" className="borderimg d-inline-block" />
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><Link to={"/Profile/" + localStorage.getItem("userId")} className="dropdown-item  text-center"> Perfil  </Link></li>

                            <li><Link to={"/MyArtwork/" + localStorage.getItem("userId")} className="dropdown-item  text-center"> Mis ilustraciones </Link></li>

                            <li><Link to="/EditProfile/" className="dropdown-item text-center"> Configuración </Link></li>
                            
                            <li><Link to={"/ConfirmSuscription/" + localStorage.getItem("userId")} className="dropdown-item text-center">  Subir a Premium <i className="bi bi-emoji-heart-eyes-fill m-1" style={{color: "#ff9e0d"}}> </i> </Link> </li>

                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item  text-center" href="#" onClick={() => loadLogOut()}> Cerrar sesión </a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="px-3" />
        </nav></div>
    );
}
