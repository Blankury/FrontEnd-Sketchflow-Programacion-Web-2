import React from "react";
import { Link } from "react-router-dom";
import { CommentCloseBtn } from "./CommentCloseBtn";

export const CommentItem = ({ comment, setDeleteCommentId }) => {
    const date = new Date(comment.creationDate);
    const dateString = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    return (

        <div className="card mb-3" style={{ width: "100%" }}>
            <div className="row g-0">
                <div className="col-md-1">
                    <img src={comment.user.profilePhoto} className="img-fluid rounded-start" alt={"comment_"+comment.commentId} />
                </div>
                <div className="col-md">
                    <div className="card-body">
                        <h5 className="card-title"><Link to={"/Profile/" + comment.user.userId}>{comment.user.userName}</Link></h5>
                        <p className="card-text">{comment.comment}</p>
                        <p className="card-text"><small className="text-body-secondary">{dateString}</small></p>
                    </div>
                </div>
                <CommentCloseBtn
                    comment={comment}
                    setDeleteCommentId={setDeleteCommentId}
                />
            </div>
        </div>
    );
}