import React from "react";
import { DrawingItem } from "./DrawingItem";

export const NavArtwork = ({ drawings }) => {
    return (
        <div className="tab-pane fade show active" id="tab_artwork" role="tabpanel" aria-labelledby="tab_artwork-tab">
            <div className="row py-2">
                {drawings.map((drawing) => (
                    <DrawingItem key={drawing.drawId} value={drawing} />
                ))}
            </div>
        </div>
    );
};