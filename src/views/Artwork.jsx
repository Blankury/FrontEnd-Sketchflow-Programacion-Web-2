import { getDrawApi, otherDrawingsApi } from "../apis/DrawApi";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { DrawTitle } from "../components/artworkComponent/DrawTitle";
import { Bookmark } from "../components/artworkComponent/Bookmark";
import { DrawTags } from "../components/artworkComponent/DrawTags";
import { Description } from "../components/artworkComponent/Description";
import { UserInfo } from "../components/artworkComponent/UserInfo";
import { OtherDrawings } from "../components/artworkComponent/OtherDrawings";
import { commentApi, commentsApi, deleteCommentApi } from "../apis/CommentApi";
import { Comments } from "../components/artworkComponent/Comments";
import { DrawingImage } from "../components/artworkComponent/DrawingImage";
import { CommentInput } from "../components/artworkComponent/CommentInput";
import { CommentSubmit } from "../components/artworkComponent/CommentSubmit";
import { ModalMessage } from "../components/artworkComponent/ModalMessage";
import { ModalDeleteComment } from "../components/artworkComponent/ModalDeletecomment";

export function Artwork() {
    const params = useParams();
    const [load, setLoad] = useState(false);

    const [draw, setDraw] = useState([]);
    const [otherDrawings, setOtherDrawings] = useState([]);
    const [bookmark, setBookmark] = useState(false);
    const [comment, setComment] = useState("");
    const [commentStatus, setCommentStatus] = useState("");
    const [comments, setComments] = useState([]);
    const [deleteCommentId, setDeleteCommentId] = useState("");

    useEffect(() => {
        fetchDraw();
    }, []);

    useEffect(() => {
        console.log("a");
    }, [bookmark]);

    async function fetchDraw() {
        const response = await getDrawApi(localStorage.getItem("userId"), params.drawId, localStorage.getItem("token"));
        const data = await response.json();
        setDraw(data.draw);

        const responseOD = await otherDrawingsApi(localStorage.getItem("userId"), data.draw.userId, 3, localStorage.getItem("token"));
        const dataOD = await responseOD.json();
        setOtherDrawings(dataOD.draws);

        await fetchComments(data.draw.drawId);

        setLoad(true);
    }

    async function fetchComments(drawId) {
        const responseC = await commentsApi(localStorage.getItem("userId"), drawId, 10, localStorage.getItem("token"));
        const dataC = await responseC.json();
        setComments(dataC.comments);
    }

    async function submitComment(event) {
        event.preventDefault();
        const response = await commentApi(localStorage.getItem("userId"), draw.drawId, comment, localStorage.getItem("token"));
        const data = await response.json();
        setCommentStatus(data.result);

        const delay = ms => new Promise(
            resolve => setTimeout(resolve, ms)
        );

        await delay(500);
        document.getElementById('modalButton1').click();

        setComment("");
        await fetchComments(draw.drawId);
    }

    async function deleteComment(){
        const response = await deleteCommentApi(localStorage.getItem("userId"), draw.drawId, deleteCommentId, localStorage.getItem("token"));
        const data = await response.json();
        setCommentStatus(data.result);

        const delay = ms => new Promise(
            resolve => setTimeout(resolve, ms)
        );
        await delay(500);
        document.getElementById('modalButton1').click();

        setDeleteCommentId("");
        await fetchComments(draw.drawId);
    }

    if (load) {
        return (
            <section className="colorbox  py-5" >
                <br />
                <div className="container bg-light">
                    <div className="row ">
                        <div className="col-md-8">
                            <DrawingImage
                                value={draw}
                            />
                            <hr />

                            <div className="row ">
                                <DrawTitle
                                    value={draw.title}
                                />

                                <div className="col-md-4">
                                    <div className="d-flex  justify-content-end">
                                        <Bookmark
                                            value={bookmark}
                                            onClick={() => { setBookmark(!bookmark); }}
                                        />
                                    </div>
                                </div>

                            </div>
                            <DrawTags
                                tags={draw.drawTag}
                            />

                            <Description
                                text={draw.description}
                            />

                        </div>
                        <div className="col-md-4 text-center">
                            <UserInfo
                                user={draw.user}
                            />

                            <hr />
                            <h6 className="py-4 px-3" > Otros trabajos </h6>
                            <div className="row">
                                <OtherDrawings
                                    draws={otherDrawings}
                                />

                            </div>
                        </div>

                        <hr />

                        <h3> Comentarios </h3>
                        <span>
                            <form action="#" className="comment-form" onSubmit={submitComment}>
                                <CommentInput
                                    value={comment}
                                    onChange={(e) => { setComment(e.target.value); }}
                                />

                                <CommentSubmit
                                />
                            </form>
                        </span>

                        <hr />

                        <span>
                            <Comments
                                comments={comments}
                                setDeleteCommentId={ setDeleteCommentId }
                            />
                        </span>
                    </div>
                </div>
                <ModalMessage
                    text={commentStatus}
                />
                <ModalDeleteComment
                    deleteComment={deleteComment}
                />
            </section>
        );
    }
}
