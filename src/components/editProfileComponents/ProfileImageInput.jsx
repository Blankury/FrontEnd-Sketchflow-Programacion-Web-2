import React, {useRef} from "react";

export const ProfileImageInput = ({value, onChange}) => {
    const fileInputRef = useRef();

    const onButtonClick = () => {
        fileInputRef.current.click();
    };

    return (

        
        <div className="d-flex" style={{ left: "10%"}} >
            <img src={value} onClick={onButtonClick}
                 className="borderbookmarks little-profile img-thumbnail mt-4 ms-3"
                 style={{ cursor: "pointer",  width: "15em", height: "15em", position: 'relative', top: '-10em', marginBottom: '-10em'}}
                />                

            <input type="file" accept="image/png, image/gif, image/jpeg, image/jpg" 
                className="filetype" autoComplete="off" id="profile-picture"
                ref={fileInputRef} onChange={onChange} style={{ display: "none" }} />


                
            </div>
    )
}