import React from "react";
import { validateArtworkComment } from "../utils/ArtworkComment";

export const CommentSubmit = () => {
    return (
        <div className="form-group bt-2 mb-4">
            <button
                type="submit"
                className="redbutton form-custom-control submit"
                onClick={validateArtworkComment}
            >
                Enviar
            </button>
        </div>
    );
};
