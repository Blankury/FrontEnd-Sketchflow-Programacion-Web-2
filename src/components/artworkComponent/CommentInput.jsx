import React from "react";

export const CommentInput = ({ value, onChange }) => {
    return (
        <textarea
            name=""
            id="formComment"
            cols="20"
            rows="4"
            className="full_input"
            placeholder="Añade un comentario."
            style={{marginBottom: 0}}
            required
            value={value}
            onChange={onChange}
        />
    );
};
