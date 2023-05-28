import React from "react";

export const DrawingImage = ({ value }) => {
    return (
        <img src={value.draw} className=" wh-100" alt="..." />
    );
}