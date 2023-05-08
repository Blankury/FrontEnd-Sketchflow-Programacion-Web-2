import React from "react";

export const FacebookInput = ({value, onChange}) => {
    return (
        <div className="input-group mb-3">
            <div className="input-group-prepend mt-2">
                <span className="input-group-text" id="basic-addon1"><i className="bi bi-facebook" /></span>
            </div>
            <input type="text" className="form-control form-custom-control text-white" id="formFacebookLink" placeholder="Facebook link" aria-label="Facebook link" aria-describedby="basic-addon1"
                value={value} onChange={onChange} />
        </div>
    )
}