import isotipo from "../assets/images/isotipo.png";
import logo from "../assets/images/sketchflow_logo.png";
import sketchflow from "../assets/images/sketchflow.png";
import { useState } from "react";
import { UserNameInput } from "../components/logInComponents/UserNameInput";
import { PasswordInput } from "../components/logInComponents/PasswordInput";
import { PasswordForgot } from "../components/logInComponents/PasswordForgot";
import { LogInSubmit } from "../components/logInComponents/LogInSubmit";
import { LogInRedirect } from "../components/logInComponents/signUpRedirect";
import { logInGet } from "../apis/LogInApi";
import { AlertMessage } from "../components/signUpComponents/alertMessage";
import { setLogInStorage } from "../components/utils/LocalStorageUtils";
import { useHistory } from "react-router-dom";
import { SessionCheckInput } from "../components/logInComponents/SessionCheckInput";

export function Login() {
    const [userName, setUser] = useState("");
    const [password, setPass] = useState("");
    const [sessionCheck, setSessionCheck] = useState(false);

    const [alertLogIn, setAlertLogIn] = useState(false);
    const [alertLogInText, setAlertLogInText] = useState("");

    const history = useHistory();

    async function submit(event){
        event.preventDefault();

        const response = await logInGet(userName, password, !sessionCheck);
        const data = await response.json();

        if(response.status === 200){
            setLogInStorage(data.user);
            setAlertLogIn(false);
            
            const delay = ms => new Promise(
                resolve => setTimeout(resolve, ms)
            );
            
            await delay(1000);
            
            history.push("/Home");
        }else{
            setAlertLogIn(true);
            setAlertLogInText(data.result);
        }
    }

    return (
        <section className="bg-light vh-100" style={{ backgroundImage: 'url("https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/Anindo_The_PRO/phpl6wYbs.gif")', backgroundSize: 'cover ' }}>
            <div className="container justify-content-md-center">
                <div className="row justify-content-center">
                    <div className="col-md-6 text-center mb-3">
                        <img src={sketchflow} alt="" className="justify-content-center" style={{ width: '40%' }} />
                    </div>

                </div>
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-4">
                        <div className="login-wrap py-5">
                            <div className="img d-flex align-items-center justify-content-center" style={{ backgroundImage: 'url("https://thumbs.dreamstime.com/b/icon-profile-color-red-icon-profile-color-red-circle-color-dark-red-background-color-white-194702099.jpg")' }}></div>
                            <h3 className="text-center mb-0">Inicia sesión</h3>
                            <p className="text-center">Introduce tus datos abajo</p>
                            <form action="#" className="login-form" onSubmit={submit}>
                                <UserNameInput
                                    value={userName}
                                    onChange={(e) => { setUser(e.target.value); }}
                                />

                                <PasswordInput
                                    value={password}
                                    onChange={(e) => { setPass(e.target.value); }}
                                />
                                
                                <SessionCheckInput
                                    value={sessionCheck}
                                    onChange={(e) => { setSessionCheck(e.target.checked); }}
                                />
                                <br />

                                <AlertMessage 
                                    alert={alertLogIn}
                                    text={alertLogInText}
                                />

                                <LogInSubmit />
                                
                            </form>

                            <LogInRedirect />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}
