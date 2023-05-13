import isotipo from "../assets/images/isotipo.png";
import logo from "../assets/images/sketchflow_logo.png";
import sketchflow from "../assets/images/sketchflow.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ArtworkInput } from "../components/uploadImageComponents/ArtworkInput";
import { TitleInput } from "../components/uploadImageComponents/TitleInput";
import { DescriptionInput } from "../components/uploadImageComponents/DescriptionInput";
import { AgeRestrictionInput } from "../components/uploadImageComponents/AgeRestrictionInput";
import { VisibilityInput } from "../components/uploadImageComponents/VisibilityInput";
import { TagsInput } from "../components/uploadImageComponents/tagsInput";
import { UploadDrawSubmit } from "../components/uploadImageComponents/UploadDrawSubmit";

export function UploadImage() {
    const [draw, setDraw] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [restrict18, setAgeRestrict18] = useState("");
    const [isPublic, setIsPublic] = useState("");
    const [tags, setTags] = useState([]);

    async function submit(event) {
        event.preventDefault();
    }

    return (
        <section className="colorbox  py-5">
            <form action="#" className="uploadImage-form" id="form" onSubmit={submit}>
                <ArtworkInput
                    value={draw}
                    onChange={(event) => setDraw(event.target.files)}
                />

                <br />
                <br />

                <div className="gradient-custom-2 container colorPrimaryvariant  ">
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

                        <TagsInput
                        />

                        <UploadDrawSubmit
                        />
                    </div>
                </div>
            </form>
        </section>
    );
}
