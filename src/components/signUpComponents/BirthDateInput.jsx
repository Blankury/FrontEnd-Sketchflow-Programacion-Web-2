import React from "react";

export const BirthDateInput = ({value, onChange}) => {
    return (
        <div className="form-group" id="grupo__fecha">
            <label for="birthDate" className="formulario__label">Fecha Nacimiento:</label>
            <div className="formulario__grupo-input pb-2">
                <input type="date" className="bg-light w-100" id="formBirthDate"
                    value={value} onChange={onChange} />
                <br />
                <i className="formulario__validacion-estado fas fa-times-circle" />
            </div>
        </div>
    )
}