import React from "react";
import { Link } from "react-router-dom";

export const CommentCloseBtn = ({ comment, setDeleteCommentId }) => {
    

    if (comment.userId === Number(localStorage.getItem("userId"))) {
        return (
            <div className="col-auto">
                <button type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop2" onClick={() => setDeleteCommentId(comment.commentId)} className="btn-close"></button>
            </div>
        );
    }
}