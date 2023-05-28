import React from "react";

export const ContactItem = ({ link, classItem }) => {
    if(link){
        return (
            <div className="input-group mb-3">
                <a className="input-group-text redbutton" href={link} target="_blank" rel="noopener noreferrer"><i className={"bi " + classItem} /></a>
                <input type="text" className="form-control" placeholder="contact" readOnly aria-label="contact" aria-describedby="basic-addon1" value={link} />
            </div>
        );
    }
};