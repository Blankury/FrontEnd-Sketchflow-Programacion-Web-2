import React from "react";

export const PasswordInput = ({value, onChange}) => {
    return (
        <div className="form-group mt-2" id="grupo__password">
            <label className="formulario__label">Contraseña</label>
                <input type="password" className="form-custom-control" id="formPassword"  placeholder="Password"
                    value={value} onChange={onChange} />
        </div>
    )
}