import React from "react";
import { DrawItem } from "./DrawItem";

export const Result = ({ drawings }) => {
    return (
        <>
            {drawings.map((draw) => (
                <DrawItem key={draw.drawId} draw={draw} />
            ))}
        </>
    );
}
