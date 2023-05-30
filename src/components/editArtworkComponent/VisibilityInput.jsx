import React from "react";

export const VisibilityInput = ({ value, onClick }) => {
    let isPublic = false;
    let isPremium = false;
    if (value === "Publico") {
        isPublic = true;
    } else if (value === "Premium") {
        isPremium = true;
    }

    return (
        <div className="form-group" id="grupo__genero">
            <label>Visibilidad</label>
            <div className="input-block">
                <div className="input-block">
                    <label className="rad-label">
                        <input
                            type="radio"
                            className="rad-input "
                            name="formIsPublic"
                            id="formIsPublic"
                            value="Publico"
                            onClick={onClick}
                            onChange={onClick}
                            checked={isPublic}
                        />
                        <div className="rad-design "></div>
                        <div className="rad-text"> Público </div>
                    </label>

                    <label className="rad-label">
                        <input
                            type="radio"
                            className="rad-input gender"
                            name="formIsPublic"
                            id="formIsPublic"
                            value="Premium"
                            onClick={onClick}
                            onChange={onClick}
                            checked={isPremium}
                        />
                        <div className="rad-design"></div>
                        <div className="rad-text"> Premium </div>
                    </label>
                </div>
            </div>
        </div>
    );
}