import React, { useState } from "react";
import { TagsInput } from "react-tag-input-component";

export const DrawTagsInput = ({ value, onChange }) => {
    return (
        <>
            <label
                id="precio"
                className="formulario__label pt-2"
            >
                Etiquetas
            </label>
            <TagsInput
                value={value}
                onChange={onChange}
                className="form-custom-control"
                name="formTags"
                id="formTags"
                placeHolder="Presiona enter para agregar un nuevo tag"
            />
            <pre style={{color: 'white'}}>{JSON.stringify(value)}</pre>
        </>
    );
}