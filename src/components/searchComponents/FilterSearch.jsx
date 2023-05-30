import React from "react";

export const FilterSearch = ({ value, onChange }) => {
    return (
        <div className="form-group">
            <label style={{ color: "black" }}>Buscar por título o tag</label>
            <div className="icon d-flex align-items-center justify-content-center"><span className="fa fa-lock"></span></div>
            <input id="search" className="form-control" placeholder="Buscar" value={value} onChange={onChange} required  />
        </div>
    );
}
