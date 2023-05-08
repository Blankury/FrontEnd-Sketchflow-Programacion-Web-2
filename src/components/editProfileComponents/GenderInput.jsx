import React from "react";

export const GenderInput = ({value, onClick}) => {

    let checkMasculino = false;
    let checkFemenino = false;
    let checkOtro = false;

    if(value === "Masculino"){
        checkMasculino = true;
    }else if(value === "Femenino"){
        checkFemenino = true;
    }else if(value === "Otro"){
        checkOtro = true;
    }

    return (
        <div className="form-group mt-2" id="grupo__genero">
            <label className="formulario__label">Genero</label>
            <div className="input-block">
                <label className="rad-label">
                    <input type="radio" className="rad-input gender" id="formGender" checked={checkMasculino} value="Masculino" onClick={onClick} onChange={onClick} />
                    <div className="rad-design rad-man"></div>
                    <div className="rad-text">Masculino</div>
                </label>
                <label className="rad-label">
                    <input type="radio" className="rad-input rad-woman gender" id="formGender" checked={checkFemenino} value="Femenino" onClick={onClick} onChange={onClick} />
                    <div className="rad-design rad-woman"></div>
                    <div className="rad-text">Femenino</div>
                </label>
                <label className="rad-label">
                    <input type="radio" className="rad-input rad-woman gender" id="formGender" checked={checkOtro} value="Otro" onClick={onClick} onChange={onClick} />
                    <div className="rad-design rad-other"></div>
                    <div className="rad-text">Otro</div>
                </label>
            </div>
        </div>
    )
}