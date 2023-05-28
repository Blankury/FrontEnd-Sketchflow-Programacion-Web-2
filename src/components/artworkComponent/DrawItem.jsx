import React from "react";
import { Link } from "react-router-dom";

export const DrawItem = ({ draw }) => {
    return (
        <div className="col-md-4 py-2">
            <Link to={"/Artwork/" + draw.drawId}>
                <img src={draw.draw}
                    alt={"image" + draw.drawId}
                    className="w-100 rounded-3"
                />
            </Link>
        </div>
    );
}