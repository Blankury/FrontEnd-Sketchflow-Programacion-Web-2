import React from "react";

export const AgeRestrictionInput = ({ onClick }) => {
    return (
        <>
            <div className="form-group" id="grupo__genero">
                <label>Restricción de edad</label>

                <div className="input-block">
                    <label className="rad-label">
                        <input
                            type="radio"
                            className="rad-input "
                            name="formRestrict18"
                            id="formRestrict18"
                            value="Todos"
                            onClick={onClick}
                        />
                        <div className="rad-design "></div>
                        <div className="rad-text"> Todos </div>
                    </label>
                    
                    <label className="rad-label">
                        <input
                            type="radio"
                            className="rad-input gender"
                            name="formRestrict18"
                            id="formRestrict18"
                            value="R-18"
                            onClick={onClick}
                        />
                        <div className="rad-design"></div>
                        <div className="rad-text">R-18</div>
                    </label>
                </div>
            </div>
        </>
    )
}