import React from "react";

export const AgeRestrictionInput = ({onClick}) => {
    return (
        <>
            <label>Restricción de edad</label>
            <div className="input-block">
                <label className="rad-label">
                    <input
                        type="radio"
                        className="rad-input "
                        name="rad"
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
                        name="rad"
                        id="formRestrict18"
                        value="R-18"
                        onClick={onClick}
                    />
                    <div className="rad-design"></div>
                    <div className="rad-text">R-18</div>
                </label>
            </div>
        </>
    )
}