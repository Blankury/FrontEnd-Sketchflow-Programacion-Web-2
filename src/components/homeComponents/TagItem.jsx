import React from "react";

export const TagItem = ({ tag }) => {
    return (
        <p className="colorquaternary text-white  rounded-1"> #{tag.tagName} </p>
    );
}
