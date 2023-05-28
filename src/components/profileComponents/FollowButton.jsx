import React from "react";

export const FollowButton = ({ userId, isFollowing, onClick }) => {
    if (userId !== Number(localStorage.getItem("userId"))) {
        if(isFollowing){
            return (
                <div className="d-flex justify-content-end  py-1">
                    <button type="button" className="redbutton px-5" onClick={onClick} >Dejar de seguir</button>
                </div>
            );
        }else{
            return (
                <div className="d-flex justify-content-end  py-1">
                    <button type="button" className="redbutton px-5" onClick={onClick} >Seguir</button>
                </div>
            );
        }

    }
};