import React, {useRef} from "react";

export const ProfileImageInput = ({value, onChange}) => {
    const fileInputRef = useRef();

    const onButtonClick = () => {
        fileInputRef.current.click();
    };

    return (
        <div className="card-body little-profile text-center">
            <div className="pro-img" id="pfp" >
                <img className="profile-pic" src={value} alt="user" onClick={onButtonClick} style={{objectFit: 'cover'}} />
                <input type="file" accept="image/png, image/gif, image/jpeg, image/jpg"
                    className="form-control position-absolute"
                    id="profile-picture"
                    autoComplete="off" ref={fileInputRef} onChange={onChange} style={{ display: "none" }} />
            </div>
        </div>
    )
}