import React from "react";

export const AgeRestrictionInput = ({ value, onClick }) => {
    let checkRestrict = false;
    let checkFamilyFriendly = false;

    if(value === "R-18"){
        checkRestrict = true;
    }else {
        checkFamilyFriendly = true;
    }

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
                            onChange={onClick}
                            checked={checkFamilyFriendly}
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
                            onChange={onClick}
                            checked={checkRestrict}
                        />
                        <div className="rad-design"></div>
                        <div className="rad-text">R-18</div>
                    </label>
                </div>
            </div>
        </>
    )
}