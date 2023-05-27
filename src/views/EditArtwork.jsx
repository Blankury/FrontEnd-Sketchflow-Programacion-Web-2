import isotipo from "../assets/images/isotipo.png";
import logo from "../assets/images/sketchflow_logo.png";
import sketchflow from "../assets/images/sketchflow.png";

import { useEffect, useState } from "react";
import { ArtworkInput } from "../components/uploadImageComponents/ArtworkInput";
import { TitleInput } from "../components/uploadImageComponents/TitleInput";
import { DescriptionInput } from "../components/uploadImageComponents/DescriptionInput";
import { AgeRestrictionInput } from "../components/uploadImageComponents/AgeRestrictionInput";
import { VisibilityInput } from "../components/uploadImageComponents/VisibilityInput";
import { DrawTagsInput } from "../components/uploadImageComponents/DrawTagsInput";
import { UpdateDrawSubmit } from "../components/uploadImageComponents/UpdateDrawSubmit";
import { AlertMessage } from "../components/uploadImageComponents/AlertMessage";
import { uploadDrawApi } from "../apis/DrawApi";
import { ModalMessage } from "../components/uploadImageComponents/ModalMessage";

export function EditArtwork() {
    const [draw, setDraw] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [restrict18, setAgeRestrict18] = useState("");
    const [isPublic, setIsPublic] = useState("");
    const [tags, setTags] = useState([]);
    const [alertTag, setAlertTag] = useState(false);
    const [modalText, setModalText] = useState("");

    useEffect(() => {
        if(tags.length > 0){
            setAlertTag(false);
        }
    }, [tags]);

    async function submit(event) {
        event.preventDefault();
        if(tags.length <= 0){
            setAlertTag(true);
        }else{
            const data = await uploadDrawApi(localStorage.getItem("userId"), draw, title, description, restrict18, isPublic, tags, localStorage.getItem("token") );
            setModalText(data.result);
            document.getElementById('modalButton1').click();
        }
    }

    return (
        <section className="colorbox  py-5">

            <form action="#" className="uploadImage-form" id="form" onSubmit={submit}>
                <div className="gradient-custom-2 container colorPrimaryvariant  ">
                    <div className="text-center">
                    <img src={isotipo} className=" " style={{objectFit: 'cover'}} width="" alt="..." /></div>

                    <br/>
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
                            onClick={(e) => { setAgeRestrict18(e.target.value); }}
                        />

                        <VisibilityInput
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
}
