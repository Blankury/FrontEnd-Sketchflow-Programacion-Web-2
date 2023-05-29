import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export const SendMessage = ({ userId}) => {
    if (userId !== localStorage.getItem("userId")) {
        return (
            <div className="d-flex justify-content-end  py-1">
                <button type="button" className="blackbutton px-5"  >
                <Link to="/Chat">
                Enviar mensaje
                </Link>
                </button>
            </div>
        );

    }
};