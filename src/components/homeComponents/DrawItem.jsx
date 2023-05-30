import React from "react";
import { Link } from "react-router-dom";

export const DrawItem = ({ draw }) => {
    let isPublic = "Premium";
    if(draw.isPublic){
        isPublic = "Público";
    }

    return (
        <div className="col-sm-3">
            <Link to={"/Artwork/" + draw.drawId} className="dropdown-item Link">
                <div className="mb-1 mt-1" >
                    <img src={draw.draw} width="200" height="200" className="rounded-3 float-left border bg-dark" alt="..." />
                </div>
                <h6 className="text-black"> {draw.title} </h6>
                <label className="text-black"> {isPublic} </label>
            </Link>
        </div>
    );
}
