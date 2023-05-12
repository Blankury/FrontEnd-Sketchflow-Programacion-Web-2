import React from "react";

export const VisibilityInput = ({ onClick }) => {
    return (
        <div className="input-block">
            <label>Visibilidad</label>
            <div className="input-block">
                <label className="rad-label">
                    <input
                        type="radio"
                        className="rad-input "
                        name="visibilidad"
                        id="formIsPublic"
                        value="Publico"
                        onClick={onClick}
                    />
                    <div className="rad-design "></div>
                    <div className="rad-text"> Público </div>
                </label>
                <label className="rad-label">
                    <input
                        type="radio"
                        className="rad-input gender"
                        name="visibilidad"
                        id="formIsPublic"
                        value="Pago"
                        onClick={onClick}
                    />
                    <div className="rad-design"></div>
                    <div className="rad-text"> Privado (Con membresía) </div>
                </label>
            </div>
        </div>
    );
}