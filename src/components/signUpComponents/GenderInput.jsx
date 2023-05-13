import React from "react";

export const GenderInput = ({ onClick }) => {
    return (
        <div className="form-group" id="grupo__genero">
            <label className="formulario__label">Género</label>
            <div className="input-block">

                <label className="rad-label">
                    <input type="radio" className="rad-input gender" id="formGender" name="formGender" value="Masculino" onClick={onClick} />
                    <div className="rad-design rad-man"></div>
                    <div className="rad-text">Masculino</div>
                </label>

                <label className="rad-label">
                    <input type="radio" className="rad-input rad-woman gender" id="formGender" name="formGender" value="Femenino" onClick={onClick} />
                    <div className="rad-design rad-woman"></div>
                    <div className="rad-text">Femenino</div>
                </label>

                <label className="rad-label">
                    <input type="radio" className="rad-input rad-woman gender" id="formGender" name="formGender" value="Otro" onClick={onClick} />
                    <div className="rad-design rad-other"></div>
                    <div className="rad-text">Otro</div>
                </label>

            </div>
        </div>
    );
}