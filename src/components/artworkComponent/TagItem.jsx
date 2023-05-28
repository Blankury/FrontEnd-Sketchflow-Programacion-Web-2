import React from "react";

export const TagItem = ({ text }) => {
    return (
        <a href="#" style={{ textDecoration: 'none' }}> #{text} </a>
    );
}