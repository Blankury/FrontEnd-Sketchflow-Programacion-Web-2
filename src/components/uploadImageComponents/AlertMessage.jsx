import React from "react";

export const AlertMessage = ({alert, text}) => {
    if(alert === true){
        return (
            <div id="AlertMessage" className="alert alert-danger" role="alert">
                {text}
            </div>
        );
    }else{
        return(
            <>
            </>
        );
    }
}