import React from "react";

export const Description = ({ value }) => {
    return (
        <div className="mb-5">
            <p className="lead fw-normal mb-1">Sobre</p>
            <div className="p-4 ">
                <p className="font-italic mb-1"> {value} </p>
            </div>
        </div>
    );
};