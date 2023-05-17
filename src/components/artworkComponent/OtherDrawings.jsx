import React from "react";
import { DrawItem } from "./DrawItem";

export const OtherDrawings = ({ draws }) => {
    return (
        <>
            {draws.map((draw) => (
                <DrawItem key={draw.drawId} draw={draw} />
            ))}
        </>
    );
}