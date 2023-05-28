import React from "react";

export const NavTab = ({ }) => {
    return (
        <>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <p className="lead fw-normal mb-0">Trabajos recientes </p>
            </div>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active text-black" id="tab_artwork-tab" data-bs-toggle="tab" data-bs-target="#tab_artwork" type="button" role="tab" aria-controls="tab_artwork" aria-selected="true">Ilustraciones</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link text-black" id="bookmarks-tab" data-bs-toggle="tab" data-bs-target="#bookmarks" type="button" role="tab" aria-controls="bookmarks" aria-selected="false">Bookmarks</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link text-black" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Contacto</button>
                </li>
            </ul>
        </>
    );
};
