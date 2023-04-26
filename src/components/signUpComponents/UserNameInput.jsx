import React from "react";
import { AlertMessage } from "./alertMessage";

export const UserNameInput = ({value, onChange, alertUserName, alertUserNameText}) => {
    return (
        <>
            <div className="form-group">
                <div className="icon d-flex align-items-center justify-content-center"><span className="fa fa-mail-forward"></span></div>
                <input id="formUserName" type="text" className="form-custom-control" placeholder="Username" value={value} onChange={onChange} />
            </div>

            <AlertMessage
                alert={alertUserName}
                text={alertUserNameText}
            />
        </>
    )
}