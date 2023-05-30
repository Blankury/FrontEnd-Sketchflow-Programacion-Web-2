import React from "react";

export const ProfileImage = ({ value }) => {
    return (
        <img
            src={value}
            alt="Generic placeholder image"
            className="borderbookmarks little-profile img-thumbnail mt-4"
            style={{ width: "14em"}}
        />
    );
};
