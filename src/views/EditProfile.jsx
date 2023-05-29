import isotipo from "../assets/images/isotipo.png";
import sketchflow from "../assets/images/sketchflow.png";
import { useState, useEffect } from "react";
import { CoverImageInput } from "../components/editProfileComponents/CoverImageInput";
import { ProfileImageInput } from "../components/editProfileComponents/ProfileImageInput";
import { UserNameInput } from "../components/editProfileComponents/UserNameInput";
import { MailInput } from "../components/editProfileComponents/MailInput";
import { DescriptionInput } from "../components/editProfileComponents/DescriptionInput";
import { CreationDateInfo } from "../components/editProfileComponents/CreationDate";
import { NameInput } from "../components/editProfileComponents/NameInput";
import { PasswordInput } from "../components/editProfileComponents/PasswordInput";
import { GenderInput } from "../components/editProfileComponents/GenderInput";
import { FacebookInput } from "../components/editProfileComponents/FacebookInput";
import { TwitterInput } from "../components/editProfileComponents/TwitterInput";
import { PaypalInput } from "../components/editProfileComponents/PaypalInput";
import { getLoggedUser, logOut } from "../apis/LogInApi";
import { EditProfileSubmit } from "../components/editProfileComponents/EditProfileSubmit";
import { ModalMessage } from "../components/editProfileComponents/modalMessage";
import { editProfileApi } from "../apis/EditProfileApi";
import { DeleteUserSubmit } from "../components/editProfileComponents/deleteUserSubmit";
import { deleteUserApi } from "../apis/DeleteUserApi";
import { useHistory } from "react-router-dom";
import { ModalDeleteMessage } from "../components/editProfileComponents/modalDeleteMessage";

export function EditProfile() {
    const [originalProfileImage, setOriginalProfileImage] = useState(isotipo);
    const [profilePhoto, setProfilePhoto] = useState([]);
    const [profileImage, setProfileImage] = useState([]);
    const [originalCoverImage, setOriginalCoverPhoto] = useState(sketchflow);
    const [coverPhoto, setCoverPhoto] = useState([]);
    const [coverImage, setCoverImage] = useState([]);

    const [username, setUserName] = useState("");
    const [mail, setMail] = useState("");
    const [description, setDescription] = useState("");
    const [creationDate, setCreationDate] = useState("");
    
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [gender, setGender] = useState("");

    const [paypalLink, setPaypalLink] = useState("");
    const [twitterLink, setTwitterLink] = useState("");
    const [facebookLink, setFacebookLink] = useState("");

    const [modalText, setModalText] = useState("");
    const history = useHistory();

    const onCoverChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            setCoverPhoto(URL.createObjectURL(img));
            setCoverImage(event.target.files[0]);
        }
    }

    const onImageChange = (event) => {
        if(event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            setProfilePhoto(URL.createObjectURL(img));
            setProfileImage(event.target.files[0]);
        }
    }

    useEffect(() => {
        loader();
    }, []);

    //useContext
    
    async function loader(){
        const data = await getLoggedUser(localStorage.getItem("userId"), localStorage.getItem("token"));
        
        setProfilePhoto(data.userLog.profilePhoto);
        setCoverPhoto(data.userLog.coverPhoto);
        setOriginalProfileImage(data.userLog.profilePhoto);
        setOriginalCoverPhoto(data.userLog.coverPhoto);
        setUserName(data.userLog.userName);
        setMail(data.userLog.email);
        setDescription(data.userLog.description);
        const date = new Date(data.userLog.creationDate);
        setCreationDate(date.getDay() + "/" + date.getDate() + "/" + date.getFullYear());
        setName(data.userLog.name);
        setGender(data.userLog.gender);
        setFacebookLink(data.userLog.facebookLink || "");
        setTwitterLink(data.userLog.twitterLink || "");
        setPaypalLink(data.userLog.paypalLink || "");
    }

    async function submit(event){
        event.preventDefault();

        const response = await editProfileApi( localStorage.getItem("userId"), profileImage, coverImage, description, name, password, gender, paypalLink, twitterLink, facebookLink, localStorage.getItem("token") );
        const data = await response.json();
        setModalText(data.result);
        document.getElementById('modalButton1').click();
    }

    async function deleteUser(event){
        event.preventDefault();
        const response = await deleteUserApi(localStorage.getItem("userId"), false, localStorage.getItem("token"));
        const data = await response.json();

        setModalText(data.result);
        document.getElementById('modalButton1').click();
        if(response.status === 200){
            await loadLogOut();
        }
    }

    async function loadLogOut(){
        const data = await logOut(localStorage.getItem("token"));
        const delay = ms => new Promise(
            resolve => setTimeout(resolve, ms)
        );
        
        await delay(1000);
        document.getElementById('modalSkip').click();
        await delay(2000);
        document.getElementById('modalClose').click();
        history.push("/login");
    }

    return (
        <section className="colorbox h-100">
            <div className="gradient-custom-2 vw-100 container bg-light">
                <div className="py-3 h-100">
                    <div className="row h-100">
                        <div className="">
                            <div className="py-5">
                                <form action="#" className="login-form" onSubmit={submit}>
                                    <h2 className="h3 mb-4 page-title text-center">Configuración de perfil</h2>

                                    <CoverImageInput
                                        value={coverPhoto}
                                        onChange={onCoverChange}
                                    />
                                    
                                    <ProfileImageInput
                                        value={profilePhoto}
                                        onChange={onImageChange}
                                    />

                                    <div className="row">
                                        <UserNameInput
                                            value={username}
                                            onChange={(e) => { setUserName(e.target.value); }}
                                        />
                                        <MailInput
                                            value={mail}
                                            onChange={(e) => { setMail(e.target.value); }}
                                        />
                                    </div>

                                    <DescriptionInput
                                        value={description}
                                        onChange={(e) => { setDescription(e.target.value); }}
                                    />
                                    
                                    <hr />

                                    <div className="container colorPrimary py-3 row">
                                        <h2 className="h3 mb-4 page-title text-center text-white">Configuración de la cuenta</h2>
                                        <CreationDateInfo
                                            value={creationDate}
                                        />
                                            
                                        <NameInput
                                            value={name}
                                            onChange={(e) => { setName(e.target.value); }}
                                        />

                                        <PasswordInput
                                            value={password}
                                            onChange={(e) => { setPassword(e.target.value); }}
                                        />
                                            
                                        <GenderInput
                                            value={gender}
                                            onClick={(e) => { setGender(e.target.value); }}
                                        />

                                        <hr style={{color: "white"}} />

                                        <label className="formulario__label">Links</label>
                                            
                                        <PaypalInput
                                            value={paypalLink}
                                            onChange={(e) => { setPaypalLink(e.target.value); }}
                                        />

                                        <TwitterInput
                                            value={twitterLink}
                                            onChange={(e) => { setTwitterLink(e.target.value); }}
                                        />

                                        <FacebookInput
                                            value={facebookLink}
                                            onChange={(e) => { setFacebookLink(e.target.value); }}
                                        />

                                        <EditProfileSubmit />
                                    </div>
                                </form>

                                <div className="container colorPrimary py-3 row">
                                    <DeleteUserSubmit />   
                                </div>

                                <ModalMessage
                                    text={modalText}
                                />

                                <ModalDeleteMessage
                                    deleteUser={deleteUser}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
