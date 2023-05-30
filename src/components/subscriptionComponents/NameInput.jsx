import React from "react";

export const NameInput = ({value, onChange}) => {
    return (
        <div className="col">
            <div className="p-4 text-black">
                <p className="lead fw-normal mb-1">Nombre del titular</p>
                <input type="text" id="titularName" className="w-100" placeholder="Nombre" value={value} onChange={onChange}/>
            </div>
        </div>    
    )
}