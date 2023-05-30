import React from "react";

export const FilterSort = ({ value, onChange }) => {
    let checkAsc = false;
    let checkDesc = false;

    if(value === "asc"){
        checkAsc = true;
    }else if(value === "desc"){
        checkDesc = true;
    }

    return (
        <div className="form-group" id="grupo__genero">
            <label style={{ color: "black" }}>Fecha de creación</label>

            <div className="input-block">
                <label className="rad-label">
                    <input
                        type="radio"
                        className="rad-input "
                        name="sortBy"
                        id="sortBy"
                        value="asc"
                        checked={checkAsc}
                        onChange={onChange}
                        onClick={onChange}
                    />
                    <div className="rad-design "></div>
                    <div className="rad-text"> Ascendiente </div>
                </label>

                <label className="rad-label">
                    <input
                        type="radio"
                        className="rad-input gender"
                        name="sortBy"
                        id="sortBy"
                        value="desc"
                        checked={checkDesc}
                        onChange={onChange}
                        onClick={onChange}
                    />
                    <div className="rad-design"></div>
                    <div className="rad-text">Descendiente</div>
                </label>
            </div>
        </div>
    );
}
