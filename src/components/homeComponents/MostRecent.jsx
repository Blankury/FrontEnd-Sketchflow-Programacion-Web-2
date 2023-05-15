import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DrawItem } from "./DrawItem";
import { mostRecentDrawsApi } from "../../apis/DrawApi";

export const MostRecent = ({ drawings }) => {
    return (
        <>
            {drawings.map((draw) => (
                <DrawItem key={draw.drawId} draw={draw} />
            ))}
        </>
    );
}
