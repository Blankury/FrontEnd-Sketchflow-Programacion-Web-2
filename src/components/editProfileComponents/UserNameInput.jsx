import React from "react";

export const UserNameInput = ({value, onChange}) => {
    return (
        <div className="col">
            <div className="card-body p-4 text-black  py-5">
                <p className="lead fw-normal mb-1">Usuario</p>
                <input type="text" id="formUserName" className="w-100" placeholder="Username" readOnly
                    value={value} onChange={onChange} />
            </div>
        </div>
    )
}