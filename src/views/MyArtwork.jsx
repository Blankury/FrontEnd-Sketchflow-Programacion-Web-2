import logo from "../assets/images/sketchflow_logo.png";
import { Link } from "react-router-dom";
import { mostRecentDrawsApi } from "../apis/DrawApi";
import { popularTagsApi } from "../apis/TagApi";
import { useEffect, useState } from "react";
import { MostRecent } from "../components/homeComponents/MostRecent";


export function MyArtwork() {
    const [drawings, setDrawings] = useState([]);
    const [tags, setTags] = useState([]);

    useEffect(() => {
        fetchDrawings();
    }, []);

    async function fetchDrawings() {
        const response = await mostRecentDrawsApi(localStorage.getItem("userId"), localStorage.getItem("token"));
        const data = await response.json();
        setDrawings(data.draws);

        const responseTags = await popularTagsApi(localStorage.getItem("userId"), localStorage.getItem("token"));
        const dataTags = await responseTags.json();
        setTags(dataTags.tags);
    }

    return (
        <section className="colorbox py-5">
            <div>
                <div className="container-fluid mt-4">
                    <div className="p-4">                      
                        <div className="bg-light text-center ">
                            <h3 className="py-3"> MIS ILUSTRACIONES</h3>
                            <div className="row py-2 px-4" id="premium-container">
                                <div className="col-sm-3">
                                    <Link to="/Artwork/0" className="dropdown-item Link">
                                        <div className="mb-1 mt-1" >
                                            <img src={logo} width="200" height="200" className="rounded-3 float-left border bg-dark" alt="..." />
                                        </div>
                                        <h6 className="text-black"> Titulo </h6>                 
                                    </Link>
          
                                    <div className=" dropdown-center">
                                        <a className="Link" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="bi bi-three-dots"></i>
                                        </a>
                                        <ul className="dropdown-menu">
                                        <li>
                                            <Link to="/EditArtwork/0" className="dropdown-item"> Editar Ilustración</Link>
                                            </li>
                                            <li>
                                            <span className="dropdown-item"> Eliminar</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                
                                
                                {
                                
                                /*<MostRecent
                                    drawings={drawings}
                                />*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>


    );
}
