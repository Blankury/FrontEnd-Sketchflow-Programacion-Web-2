import React from "react";

export const NameInput = ({value, onChange}) => {
    return (
        <div className="form-group">
            <div className="icon d-flex align-items-center justify-content-center"><span className="fa fa-lock"></span></div>
            <input type="text" id="formName" className="form-custom-control" placeholder="Nombre" value={value} onChange={onChange} />
        </div>
    )
}