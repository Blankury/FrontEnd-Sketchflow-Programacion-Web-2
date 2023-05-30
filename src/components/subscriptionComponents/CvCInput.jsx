import React from "react";

export const CvCInput = ({value, onChange}) => {
    return (
        <div className="col">
            <div className="p-4 text-black">
                <p className="lead fw-normal mb-1">CVC</p>
                <input type="text" id="cvc" className="w-100" placeholder="CVC"
                   value={value} onChange={onChange}  />
            </div>
        </div>
    )
}