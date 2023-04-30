import React from "react";

export const PasswordInput = ({value, onChange}) => {
    return (
        <div className="form-group">
            <div className="icon d-flex align-items-center justify-content-center"><span className="fa fa-lock"></span></div>
            <input type="password" id="formPassword" className="form-custom-control" placeholder="Password" required value={value} onChange={onChange} />
        </div>
    )
}