import React from "react";

export const GenderInput = ({onClick}) => {
    return (
        <div className="form-group" id="grupo__genero">
            <label for="genero" className="formulario__label">Genero</label>
            <div className="input-block">

                <label className="rad-label">
                    <input type="radio" className="rad-input gender" name="rad" id="formGender" value="Hombre" onClick={onClick} />
                    <div className="rad-design rad-man"></div>
                    <div className="rad-text">Hombre</div>
                </label>

                <label className="rad-label">
                    <input type="radio" className="rad-input rad-woman gender" name="rad" id="formGender" value="Mujer" onClick={onClick} />
                    <div className="rad-design rad-woman"></div>
                    <div className="rad-text">Mujer</div>
                </label>

                <label className="rad-label">
                    <input type="radio" className="rad-input rad-woman gender" name="rad" id="formGender" value="Otro" onClick={onClick} />
                    <div className="rad-design rad-other"></div>
                    <div className="rad-text">Otro</div>
                </label>
                
            </div>
        </div>
    )
}