import React from "react";
import { validateEditProfile } from "../utils/editProfile";

export const EditProfileSubmit = () => {
    return (
        <div className="form-group">
            <button type="submit" className="redbutton form-custom-control submit px-3"  onClick={validateEditProfile} >GUARDAR</button>
        </div>
    )
}
