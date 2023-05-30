import React from "react";

export const FilterLimit = ({ value, onChange }) => {
    return (
        <div className="form-group">
            <label style={{ color: "black" }}>Limite de dibujos</label>
            <div className="icon d-flex align-items-center justify-content-center"><span className="fa fa-lock"></span></div>
            <input type="number" id="limit" className="form-control" placeholder="limite" value={value} onChange={onChange} min={1} required  />
        </div>
    );
}
