import React from "react";
import { validateUploadDraw } from "../utils/uploadDraw";

export const UploadDrawSubmit = () => {
    return (
        <div className="form-group px-3 py-4">
            <button
                type="submit"
                className="redbutton form-custom-control submit px-3"
                onClick={validateUploadDraw}
            >
                Publicar
            </button>
        </div>
    )
}