import React from "react";

export const DescriptionInput = ({value, onChange}) => {
    return (
        <div className="card-body p-4 text-black py-1" >
            <p className="lead fw-normal mb-1">Acerca de mí</p>
            <textarea className="form-control w-100" id="formBiography" placeholder="Biografia" rows="3"
                value={value} onChange={onChange} />
        </div>
    )
}