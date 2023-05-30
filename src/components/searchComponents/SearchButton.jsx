import React from "react";

export const SearchButton = ({onClick}) => {
    return (
        <div className="form-group">
            <button className="redbutton form-custom-control submit px-3" onClick={onClick} >BUSCAR</button>
        </div>
    )
}