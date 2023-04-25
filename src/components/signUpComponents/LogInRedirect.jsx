import React from "react";
import { Link } from "react-router-dom";

export const LogInRedirect = () => {
    return (
        <div className="w-100 text-center mt-4 text">
            <p className="mb-0">Ya tienes una cuenta?</p>
            <Link to="/login" className="dropdown-item Link">Inicia sesión</Link>
        </div>
    )
}