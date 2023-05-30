import React from "react";
import { ArtworkItem } from "./ArtworkItem";

export const NavArtwork = ({ drawings, deleteDrawing }) => {
    return (
        <div className="row py-2 px-4" id="premium-container">
            {drawings.map((drawing) => (
                <ArtworkItem 
                    key={drawing.drawId} 
                    value={drawing}
                    deleteDrawing={deleteDrawing}
                />
            ))}
        </div>
    );
};
