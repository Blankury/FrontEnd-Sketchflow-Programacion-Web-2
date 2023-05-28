import React from "react";
import { TagItem } from "./TagItem";

export const DrawTags = ({ tags }) => {
    return (
        <>
            {tags.map((tag) => (
                <TagItem key={tag.tagName} text={tag.tagName} />
            ))}
        </>
    );
}