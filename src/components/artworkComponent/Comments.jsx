import React from "react";
import { CommentItem } from "./CommentItem";

export const Comments = ({ comments, setDeleteCommentId }) => {
    return (
        <>
            {comments.map((comment) => (
                <CommentItem key={comment.commentId} comment={comment} setDeleteCommentId={setDeleteCommentId} />
            ))}
        </>
    );
}