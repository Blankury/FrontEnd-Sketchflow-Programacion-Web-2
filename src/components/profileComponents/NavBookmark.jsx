import React from "react";
import { DrawingItem } from "./DrawingItem";

export const NavBookmark = ({ bookmarks }) => {
    return (
        <div className="tab-pane fade" id="bookmarks" role="tabpanel" aria-labelledby="bookmarks-tab">
            <div className="row py-2">
                {bookmarks.map((bookmark) => (
                    <DrawingItem key={bookmark.bookmarkId} value={bookmark.draw} />
                ))}
            </div>
        </div>
    );
};
