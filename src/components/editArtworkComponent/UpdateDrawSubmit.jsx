import React from "react";
import { validateUpdateDraw } from "../utils/updateDrawing";

export const UpdateDrawSubmit = () => {
    return (
        <div className="form-group px-3 py-4">
            <button
                type="submit"
                className="redbutton form-custom-control submit px-3"
                onClick={validateUpdateDraw}
            >
                Actualizar
            </button>
        </div>
    )
}