import React from "react";

export const TitleInput = ({ value, onChange }) => {
    return (
        <>
            <label className="formulario__label">
                Título de la ilustración
            </label>
            <input
                type="text"
                className="form-custom-control"
                name="artwork_name"
                id="formTitle"
                placeholder="Título de la ilustración"
                required
                value={value}
                onChange={onChange}
            />
        </>
    )
}