import React from "react";
import { TagItem } from "./TagItem";

export const PopularTags = ({ tags }) => {
    return (
        <div className="vh-100 py-5  px-2 pe-2 box bg-light scrollbar thin ">
            {tags.map((tag) => (
                <TagItem key={tag.tagName} tag={tag} />
            ))}
        </div>
    );
}
