import React from "react";

export const DescriptionInput = ({ value, onChange }) => {
    return (
        <>
            <label className="formulario__label">
                Descripción
            </label>
            <div className="form-group-input">
                <input
                    type="text"
                    className="form-custom-control"
                    name="artwork_caption"
                    id="artwork_caption"
                    placeholder="artwork_caption"
                    required
                    value={value}
                    onChange={onChange}
                />
            </div>
        </>
    )
}