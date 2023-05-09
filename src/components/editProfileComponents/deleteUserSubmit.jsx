import React from "react";

export const DeleteUserSubmit = ({deleteUser}) => {
   
    return (
        <div className="form-group">
            <button className="blackbutton form-custom-control submit px-3" onClick={deleteUser}>ELIMINAR PERFIL</button>
        </div>
    )
}
