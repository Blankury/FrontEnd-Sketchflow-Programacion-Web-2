import React from "react";

export const ArtworkInput = ({value, onChange}) => {
    return (
        <div className=" px-5 bg-dark h-50 text-white row d-flex align-items-center justify-content-center">
            <div className=" py-5 text-white text-center">
                <input
                    className=" redbutton"
                    type="file"
                    id="formDraw"
                    onChange={onChange}
                />
                <hr />
                Archivos importados: {value.length}
                <p>JPEG / GIF / PNG</p>
                <p>
                    You can upload up to 32 MB per file
                </p>
            </div>
        </div>
    )
}