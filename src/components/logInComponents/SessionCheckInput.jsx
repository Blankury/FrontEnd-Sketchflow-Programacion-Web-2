import React from "react";

export const SessionCheckInput = ({value, onChange}) => {
    return (
        <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="formSession" checked={value} onChange={onChange} />
            <label className="form-check-label" for="flexSwitchCheckDefault">Mantener sesión abierta</label>
        </div>
    )
}