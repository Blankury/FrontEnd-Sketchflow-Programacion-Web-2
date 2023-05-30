import React from "react";
import { Link } from "react-router-dom";

export const ArtworkItem = ({ value, deleteDrawing }) => {
    return (
        <div className="col-sm-2">
            <Link to={"/Artwork/" + value.drawId} className="dropdown-item Link">
                <div className="mb-1 mt-1" >
                    <img src={value.draw} width="200" height="200" className="rounded-3 float-left border bg-dark" alt="..." />
                </div>
                <h6 className="text-black"> {value.title} </h6>
            </Link>

            <div className=" dropdown-center">
                <a className="Link" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="bi bi-three-dots"></i>
                </a>
                <ul className="dropdown-menu">
                    <li>
                        <Link to={"/EditArtwork/" + value.drawId} className="dropdown-item"> Editar Ilustración</Link>
                    </li>
                    <li>
                        <span className="dropdown-item" onClick={() => deleteDrawing(value.drawId)} > Eliminar</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};
