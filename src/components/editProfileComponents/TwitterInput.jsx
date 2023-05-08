import React from "react";

export const TwitterInput = ({value, onChange}) => {
    return (
        <div className="input-group mb-3">
            <div className="input-group-prepend mt-2">
                <span className="input-group-text" id="basic-addon1"><i className="bi bi-twitter" /></span>
            </div>
            <input type="text" className="form-control form-custom-control text-white" id="formTwitterLink" placeholder="Twitter link" aria-label="Twitter link" aria-describedby="basic-addon1"
                value={value} onChange={onChange} />
        </div>
    )
}