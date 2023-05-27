import React, {useRef} from "react";

export const ProfileImageInput = ({value, onChange}) => {
    const fileInputRef = useRef();

    const onButtonClick = () => {
        fileInputRef.current.click();
    };

    return (

        
        <div className="d-flex" style={{ left: "10%"}} >
            <img src={value} onClick={onButtonClick}
                 className="borderbookmarks img-fluid img-thumbnail mt-4 mb-2"
                 style={{ cursor: "pointer",  width: "15em", height: "15em", position: 'relative', top: '-10em', marginBottom: '-10em', objectFit: 'cover'}}
                />                

            <input type="file" accept="image/png, image/gif, image/jpeg, image/jpg" 
                className="filetype" autoComplete="off" id="profile-picture"
                ref={fileInputRef} onChange={onChange} style={{ display: "none" }} />


                
            </div>
    )
}