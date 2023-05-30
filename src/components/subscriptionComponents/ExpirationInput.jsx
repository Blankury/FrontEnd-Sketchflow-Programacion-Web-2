import React from "react";

export const ExpirationInput = ({value, onChange}) => {
    return (
        <div className="col">   
            <div className="p-4 text-black">
                <p className="lead fw-normal mb-1">Vencimiento</p>
                <input type="text" id="Vencimiento" className="w-100" placeholder="MM/AA" readOnly
                  value={value} onChange={onChange}   />
            </div>
        </div>
    )
}