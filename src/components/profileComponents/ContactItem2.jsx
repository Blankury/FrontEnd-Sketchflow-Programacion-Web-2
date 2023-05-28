import React from "react";

export const ContactItem2 = ({ text, classItem }) => {
    if(text){
        return (
            <div className="input-group mb-3">
                <button className="input-group-text redbutton"><i className={"bi " + classItem} /></button>
                <input type="text" className="form-control" placeholder="contact" readOnly aria-label="contact" aria-describedby="basic-addon1" value={text} />
            </div>
        );
    }
};