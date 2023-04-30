import React from "react";

export const UserNameInput = ({value, onChange}) => {
    return (
        <div className="form-group">
            <div className="icon d-flex align-items-center justify-content-center"><span className="fa fa-user"></span></div>
            <input type="text" id="formUserName" className="form-custom-control" placeholder="Username" required value={value} onChange={onChange}></input>
        </div>
    )
}