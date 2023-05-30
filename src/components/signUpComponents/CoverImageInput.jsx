import React, {useRef} from "react";
import { ProfileImageInput } from "./ProfileImageInput";

export const CoverImageInput = ({value, onChange, valueChild, onChangeChild}) => {
    const fileInputRef = useRef();

    const onButtonClick = () => {
        fileInputRef.current.click();
    };

    return (
        <>
        <div className="padding" >
            <div className="justify-content-center">
                <div className="card"> <img className="card-img-top" src={value} alt="Card image cap" onClick={onButtonClick} style={{objectFit: 'cover'}} />
                    <input type="file" accept="image/png, image/gif, image/jpeg, image/jpg"
                        className="form-control position-absolute"
                        id="cover-picture"
                        autoComplete="off" ref={fileInputRef} onChange={onChange} style={{ display: "none" }} />
                    
                    <ProfileImageInput
                        value={valueChild}
                        onChange={onChangeChild}
                    />
                </div>
            </div>
        </div>

        <div className="form-group" name="profile-pic">
            <p id="text-r" className="text-center mb-0">Haz click para introducir una foto de perfil y portada</p>
        </div>
        </>
    )
}