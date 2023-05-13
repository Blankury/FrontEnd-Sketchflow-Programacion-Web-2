import React from "react";

export const DescriptionInput = ({ value, onChange }) => {
    return (
        <>
            <label className="formulario__label">Descripción</label>
            <div className="form-group-input">
                <textarea
                    className="form-custom-control"
                    name="artwork_caption"
                    id="formDescription"
                    placeholder="Descripción (Opcional)"
                    value={value}
                    onChange={onChange}
                />
            </div>
        </>
    );
};
