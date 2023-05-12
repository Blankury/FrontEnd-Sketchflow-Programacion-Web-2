import React from "react";

export const TitleInput = ({ value, onChange }) => {
    return (
        <>
            <label className="formulario__label">
                Nombre de la publicación
            </label>
            <input
                type="text"
                className="form-custom-control"
                name="artwork_name"
                id="formTitle"
                placeholder="artwork_name de la ilustración"
                required
                value={value}
                onChange={onChange}
            />
        </>
    )
}