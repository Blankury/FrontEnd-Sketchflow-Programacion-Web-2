import React from "react";

export const NameInput = ({value, onChange}) => {
    return (
        <div className="form-group-input">
            <label className="formulario__label">Nombre</label>
            <input type="text" className="form-custom-control" id="formName" placeholder="Tu nombre" 
                value={value} onChange={onChange} />
        </div>
    )
}