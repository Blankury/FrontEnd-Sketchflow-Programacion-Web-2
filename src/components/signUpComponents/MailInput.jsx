import React from "react";
import { AlertMessage } from "./alertMessage";

export const MailInput = ({value, onChange, alertMail, alertMailText}) => {
    return (
        <>
            <div className="form-group">
                <div className="icon d-flex align-items-center justify-content-center"><span className="fa fa-user"></span></div>
                <input type="email" id="formMail" className="form-custom-control" placeholder="Email" value={value} onChange={onChange} />
            </div>

            <AlertMessage
                alert={alertMail}
                text={alertMailText}
            />
        </>
    )
}