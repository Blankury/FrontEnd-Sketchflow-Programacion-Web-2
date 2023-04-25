import isotipo from "../assets/images/isotipo.png";
import sketchflow from "../assets/images/sketchflow.png";
import { useState, useRef } from "react";

import { CoverImageInput } from "../components/signUpComponents/CoverImageInput";
import { NameInput } from "../components/signUpComponents/NameInput";
import { MailInput } from "../components/signUpComponents/MailInput";
import { UserNameInput } from "../components/signUpComponents/UserNameInput";
import { PasswordInput } from "../components/signUpComponents/PasswordInput";
import { GenderInput } from "../components/signUpComponents/GenderInput";
import { BirthDateInput } from "../components/signUpComponents/BirthDateInput";
import { SignUpSubmit } from "../components/signUpComponents/SignUpSubmit";
import { LogInRedirect } from "../components/signUpComponents/LogInRedirect";
import { signUpget } from "../apis/SignUpApi";

export function Signup() {

    const [userName, setUser] = useState("");
    const [password, setPass] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [gender, setGender] = useState("");

    const [profilePhoto, setProfilePhoto] = useState(isotipo);
    const [profileImage, setProfileImage] = useState([]);

    const [coverPhoto, setCoverPhoto] = useState(sketchflow);
    const [coverImage, setcoverImage] = useState([]);

    return (
        <section style={{ backgroundImage: 'url("https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/Anindo_The_PRO/phpl6wYbs.gif")', backgroundSize: 'cover ' }}>
            <div className="container justify-content-md-center">
                <div className="row justify-content-center">
                    <div className="col-md-6 text-center ">
                        <img src={sketchflow} alt="" className="justify-content-center" style={{ width: '40%' }} />
                    </div>

                </div>
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-4">
                        <div className="login-wrap py-5">
                            <h3 className="text-center mb-0">Crea tu cuenta</h3>
                            <p className="text-center">Introduce tus datos abajo</p>
                            <form action="#" className="login-form" id="form" 
                            onSubmit={signUpget}>

                                <CoverImageInput
                                    value={coverPhoto}
                                    onChange={(event) => {
                                        if (event.target.files && event.target.files[0]) {
                                            let img = event.target.files[0];
                                            setCoverPhoto(URL.createObjectURL(img));
                                            setcoverImage(event.target.files[0]);
                                        }
                                    }}
                                    valueChild={profilePhoto}
                                    onChangeChild={(event) => {
                                        if (event.target.files && event.target.files[0]) {
                                            let img = event.target.files[0];
                                            setProfilePhoto(URL.createObjectURL(img));
                                            setProfileImage(event.target.files[0]);
                                        }
                                    }}
                                />
                                
                                <NameInput
                                    value={name}
                                    onChange={(e) => { setName(e.target.value); }}
                                />

                                <MailInput
                                    value={email}
                                    onChange={(e) => { setEmail(e.target.value); }}
                                />

                                <UserNameInput
                                    value={userName}
                                    onChange={(e) => { setUser(e.target.value); }}
                                />

                                <PasswordInput
                                    value={password}
                                    onChange={(e) => { setPass(e.target.value); }}
                                />

                                <GenderInput
                                    onClick={(e) => { setGender(e.target.value); }}
                                />

                                <BirthDateInput 
                                    value={birthDate}
                                    onChange={(e) => { setBirthDate(e.target.value); }}
                                />

                                <SignUpSubmit />

                                <LogInRedirect />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}
