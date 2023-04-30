import React from "react";
import { Link } from "react-router-dom";

export const LogInRedirect = () => {
    return (
        <div className="w-100 text-center mt-4 text">
            <p className="mb-0">¿No tienes una cuenta?</p>
            <Link to="/signup" className="dropdown-item Link">Registrate</Link>
        </div>
    )
}