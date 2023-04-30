import React from "react";
import { validateLogIn } from "../utils/logIn";

export const LogInSubmit = () => {
    return (
        <div className="form-group">
            <button type="submit" className="redbutton form-custom-control submit px-3" onClick={validateLogIn}>INICIA SESIÓN</button>
        </div>
    )
}
