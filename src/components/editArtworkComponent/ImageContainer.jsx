import React from "react";

export const ImageContainer = ({ draw }) => {
    return (
        <div className="text-center">
            <img src={draw} className=" " style={{ objectFit: 'cover' }} width="" alt="..." />
        </div>
    )
}