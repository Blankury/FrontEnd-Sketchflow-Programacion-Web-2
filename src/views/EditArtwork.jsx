import isotipo from "../assets/images/isotipo.png";
import logo from "../assets/images/sketchflow_logo.png";
import sketchflow from "../assets/images/sketchflow.png";

import { useEffect, useState } from "react";
import { ArtworkInput } from "../components/uploadImageComponents/ArtworkInput";
import { TitleInput } from "../components/uploadImageComponents/TitleInput";
import { DescriptionInput } from "../components/uploadImageComponents/DescriptionInput";
import { AgeRestrictionInput } from "../components/editArtworkComponent/AgeRestrictionInput";
import { VisibilityInput } from "../components/editArtworkComponent/VisibilityInput";
import { DrawTagsInput } from "../components/uploadImageComponents/DrawTagsInput";
import { UpdateDrawSubmit } from "../components/editArtworkComponent/UpdateDrawSubmit";
import { AlertMessage } from "../components/uploadImageComponents/AlertMessage";
import { getDrawApi, updateDrawApi, uploadDrawApi } from "../apis/DrawApi";
import { ModalMessage } from "../components/uploadImageComponents/ModalMessage";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { ImageContainer } from "../components/editArtworkComponent/ImageContainer";

export function EditArtwork() {
    const params = useParams();
    const [draw, setDraw] = useState([]);
    const [isLoaded, setLoaded] = useState(false);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [restrict18, setAgeRestrict18] = useState("");
    const [isPublic, setIsPublic] = useState("");
    const [tags, setTags] = useState([]);
    const [alertTag, setAlertTag] = useState(false);
    const [modalText, setModalText] = useState("");

    useEffect(() => {
        fetchDraw();
    }, [params.drawId]);

    useEffect(() => {
        if (draw.length <= 0) {
            setLoaded(true);
        }
    }, [draw]);

    useEffect(() => {
        if (tags.length > 0) {
            setAlertTag(false);
        }
    }, [tags]);

    async function fetchDraw() {
        const response = await getDrawApi(localStorage.getItem("userId"), params.drawId, localStorage.getItem("token"));
        const data = await response.json();
        setDraw(data.draw);
        setTitle(data.draw.title);
        setDescription(data.draw.description);

        if (data.draw.restrict18) {
            setAgeRestrict18("R-18");
        } else {
            setAgeRestrict18("Todos");
        }

        if (data.draw.isPublic) {
            setIsPublic("Publico");
        } else {
            setIsPublic("Premium");
        }

        data.draw.drawTag.forEach(tag => {
            //console.log(tag.tagName);
            setTags([tag.tagName]);
        });
    }

    async function submit(event) {
        event.preventDefault();
        if (tags.length <= 0) {
            setAlertTag(true);
        } else {
            const data = await updateDrawApi(localStorage.getItem("userId"), params.drawId, title, description, restrict18, isPublic, tags, localStorage.getItem("token"));
            setModalText(data.result);
            document.getElementById('modalButton1').click();
        }
    }

    if (isLoaded) {
        return (
            <section className="colorbox  py-5">
                <form action="#" className="uploadImage-form" id="form" onSubmit={submit}>
                    <div className="gradient-custom-2 container colorPrimaryvariant  ">
                        <ImageContainer
                            draw={draw.draw}
                        />

                        <br />

                        <TitleInput
                            value={title}
                            onChange={(e) => { setTitle(e.target.value); }}
                        />

                        <DescriptionInput
                            value={description}
                            onChange={(e) => { setDescription(e.target.value); }}
                        />

                        <div className="form-group" id="restricciones">
                            <AgeRestrictionInput
                                value={restrict18}
                                onClick={(e) => { setAgeRestrict18(e.target.value); }}
                            />

                            <VisibilityInput
                                value={isPublic}
                                onClick={(e) => { setIsPublic(e.target.value); }}
                            />

                            <DrawTagsInput
                                value={tags}
                                onChange={setTags}
                            />

                            <AlertMessage
                                alert={alertTag}
                                text={"Agrega al menos un tag."}
                            />

                            <UpdateDrawSubmit
                            />
                        </div>
                    </div>
                </form>
                <ModalMessage
                    text={modalText}
                />
            </section>
        );
    };
}
