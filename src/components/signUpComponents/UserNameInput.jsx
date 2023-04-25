import React from "react";

export const UserNameInput = ({value, onChange}) => {
    return (
        <div className="form-group">
            <div className="icon d-flex align-items-center justify-content-center"><span className="fa fa-mail-forward"></span></div>
            <input id="formUserName" type="text" className="form-custom-control" placeholder="Username" value={value} onChange={onChange} />
        </div>
    )
}