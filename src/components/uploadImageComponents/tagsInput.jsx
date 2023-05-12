import React from "react";

export const TagsInput = ({ value, onChange }) => {
    return (
        <>
            <label
                id="precio"
                className="formulario__label"
            >
                Etiquetas
            </label>
            <input
                type="text"
                className="form-custom-control"
                name="artwork_tags"
                id="formTags"
                placeholder="Tags"
                required
            />
        </>
    )
}