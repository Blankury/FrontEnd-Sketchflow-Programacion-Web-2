import React, {useRef} from "react";

export const CoverImageInput = ({value, onChange}) => {
    const fileInputRef = useRef();

    const onButtonClick = () => {
        fileInputRef.current.click();
    };

    return (
        <div className="d-flex">
            <img src={value} onClick={onButtonClick} style={{ cursor: 'pointer', width: '100%',height: '20em' , overflow: 'hidden' }} />
            <input type="file" accept="image/png, image/gif, image/jpeg, image/jpg"
                className="form-control position-absolute" autoComplete="off" id="cover-picture"
                ref={fileInputRef} onChange={onChange} style={{ display: "none" }} />
        </div>
    )
}