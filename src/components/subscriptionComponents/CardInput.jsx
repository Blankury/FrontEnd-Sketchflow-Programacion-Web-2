import React from "react";

export const CardInput = ({value, onChange}) => {
    return (
        <div className="col">
            <div className="p-4 text-black">
                <p className="lead fw-normal mb-1">Numero de tarjeta</p>
                <input type="text" id="cardNumber" className="w-100" placeholder="Numero de tarjeta" value={value} onChange={onChange} />
            </div>
        </div>
                        
    )
}