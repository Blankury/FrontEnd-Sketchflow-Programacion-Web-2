import React from "react";

export const SessionCheckInput = ({value, onChange}) => {
    return (
        <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" role="switch" id="formSession" checked={value} onChange={onChange} />
            <label class="form-check-label" for="flexSwitchCheckDefault">Mantener sesión abierta</label>
        </div>
    )
}