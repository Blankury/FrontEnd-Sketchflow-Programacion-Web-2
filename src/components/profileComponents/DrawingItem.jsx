import React from "react";
import { Link } from "react-router-dom";

export const DrawingItem = ({ value }) => {
    return (
        <div className="col-md-2 py-2">
            <Link to={"/Artwork/" + value.drawId} className="dropdown-item Link">
                <img src={value.draw}
                    alt="image 1" className="w-100 rounded-3" />
            </Link>
        </div>
    );
};
