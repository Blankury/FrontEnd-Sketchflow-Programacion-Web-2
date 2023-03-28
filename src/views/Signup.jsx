import isotipo from "../assets/images/isotipo.png";
import sketchflow from "../assets/images/sketchflow.png";
import { useState,useRef} from "react";


export function Signup() {

    const [userName, setUser] = useState("");
    const [password, setPass] = useState("");
    const [email, setEmail] = useState("");
    const [profilePhoto, setProfilePhoto] = useState("");
    const [coverPhoto, setCoverPhoto] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [gender, setGender] = useState("");
    
    const fileInputRef = useRef();
    const fileInputRef2 = useRef();

    
    const [image, setImage] = useState(isotipo);
    const [cover, setCover] = useState(sketchflow);


    const onImageChange = (event) => {
      if (event.target.files && event.target.files[0]) {
          let img = event.target.files[0];
          setImage(URL.createObjectURL(img));
          }
     }

     const onCoverChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            setCover(URL.createObjectURL(img));
            }
       }

    const onButtonClick = () => {
        fileInputRef.current.click();
    };

    const onCoverClick = () => {
        fileInputRef2.current.click();
    };

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
                            <form action="#" className="login-form">

                                <div className="padding" >
                                    <div className="justify-content-center">
                                        <div className="card"> <img className="card-img-top" src={cover} alt="Card image cap"  onClick={onCoverClick} />
                                        <input type="file" accept="image/png, image/gif, image/jpeg, image/jpg"
                                        class="form-control position-absolute"
                                        name="profile-picture" id="profile-picture"
                                        autocomplete="off" ref={fileInputRef2}  onChange={onCoverChange} style={{ display: "none" }}/>

                                            <div className="card-body little-profile text-center">
                                                <div className="pro-img" id="pfp" >
                                                    <img className="img-thumbnail" width="40%" src={image} alt="user" onClick={onButtonClick} />
                                                    <input type="file" accept="image/png, image/gif, image/jpeg, image/jpg"
                                                        class="form-control position-absolute"
                                                        name="profile-picture" id="profile-picture"
                                                        autocomplete="off" ref={fileInputRef}  onChange={onImageChange} style={{ display: "none" }}/>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="form-group" name="profile-pic">
                                    <p id="text-r" className="text-center mb-0">Haz click para introducir una foto de perfil y portada</p>
                                </div>
                                <div className="form-group">
                                    <div className="icon d-flex align-items-center justify-content-center"><span className="fa fa-lock"></span></div>
                                    <input type="text" className="form-custom-control" placeholder="Nombre" required value={name} onChange={(e) => {
                                        setName(e.target.value);
                                    }} />
                                </div>
                                <div className="form-group">
                                    <div className="icon d-flex align-items-center justify-content-center"><span className="fa fa-user"></span></div>
                                    <input type="email" className="form-custom-control" placeholder="Email" required value={email} onChange={(e) => {
                                        setEmail(e.target.value);
                                    }} />
                                </div>

                                <div className="form-group">
                                    <div className="icon d-flex align-items-center justify-content-center"><span className="fa fa-mail-forward"></span></div>
                                    <input type="text" className="form-custom-control" placeholder="Username" required value={userName} onChange={(e) => {
                                        setUser(e.target.value);
                                    }} />
                                </div>

                                <div className="form-group">
                                    <div className="icon d-flex align-items-center justify-content-center"><span className="fa fa-lock"></span></div>
                                    <input type="password" className="form-custom-control" placeholder="Contraseña" required value={password} onChange={(e) => {
                                        setPass(e.target.value);
                                    }} />
                                </div>

                                <div className="form-group">
                                    <textarea className="form-custom-control" placeholder="Descripción" cols="3" rows="3" value={description} onChange={(e) => {
                                        setDescription(e.target.value);
                                    }}></textarea>
                                </div>

                                <div className="form-group" id="grupo__genero">
                                    <label for="genero" className="formulario__label">Genero</label>
                                    <div className="input-block">
                                        <label className="rad-label">
                                            <input type="radio" className="rad-input gender" name="rad" id="Hombre" value="Hombre" onClick={(e) => {
                                                setGender(e.target.value);
                                            }} />
                                            <div className="rad-design rad-man"></div>
                                            <div className="rad-text">Hombre</div>
                                        </label>
                                        <label className="rad-label">
                                            <input type="radio" className="rad-input rad-woman gender" name="rad" id="Mujer" value="Mujer" onClick={(e) => {
                                                setGender(e.target.value);
                                            }} />
                                            <div className="rad-design rad-woman"></div>
                                            <div className="rad-text">Mujer</div>
                                        </label>
                                        <label className="rad-label">
                                            <input type="radio" className="rad-input rad-woman gender" name="rad" id="Otro" value="Otro" onClick={(e) => {
                                                setGender(e.target.value);
                                            }} />
                                            <div className="rad-design rad-other"></div>
                                            <div className="rad-text">Otro</div>
                                        </label>
                                    </div>
                                </div>


                                <div className="form-group" id="grupo__fecha">
                                    <label for="birthDate" className="formulario__label">Fecha Nacimiento:</label>
                                    <div className="formulario__grupo-input pb-2">
                                        <input type="date" className="bg-light w-100"
                                            value={birthDate} onChange={(e) => { setBirthDate(e.target.value); console.log(birthDate); }} />
                                        <br />
                                        <i className="formulario__validacion-estado fas fa-times-circle" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <button type="submit" className="redbutton form-custom-control submit px-3" onClick={SignUpget}>REGISTRARTE</button>
                                </div>

                                <div className="w-100 text-center mt-4 text">
                                    <p className="mb-0">Ya tienes una cuenta?</p>
                                    <a href="#">Inicia sesión</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );



    async function SignUpget() {


        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                userName: userName,
                password: password,
                description: description,
                name: name,
                email: email,
                gender: gender,
                birthDate: birthDate,
                coverPhoto: coverPhoto,
                profilePhoto: profilePhoto
            })
        };


        console.log(options);
        //const response = await fetch('http://localhost:8080/login', options);
        //const data = await response.json();

    }
    
}
