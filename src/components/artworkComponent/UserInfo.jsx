import React from "react";
import { Link } from "react-router-dom";

export const UserInfo = ({ user }) => {
    return (
        <div className="d-flex mt-4 mb-2">
            <img src={user.profilePhoto}
                alt="..." className="borderprofile img-fluid img-thumbnail"
                style={{ width: '100px' }} />

            <h4 className="py-4 px-3" ><Link to={"/Profile/" + user.userId} className="dropdown-item Link">{user.userName}</Link></h4>
            
        </div>
    );
}