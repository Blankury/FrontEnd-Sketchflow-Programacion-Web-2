import isotipo from "../assets/images/isotipo.png";
import logo from "../assets/images/sketchflow_logo.png";
import sketchflow from "../assets/images/sketchflow.png";


export function Signin() {

    return (


        <section style={{ backgroundImage: 'url("https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/Anindo_The_PRO/phpl6wYbs.gif")', backgroundSize: 'cover ' }}>
            <div className="container justify-content-md-center">
                <div className="row justify-content-center">
                    <div className="col-md-6 text-center ">
                        <img src={sketchflow} alt="" className="justify-content-center " style={{ width: '40%' }} />
                    </div>

                </div>
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-4">
                        <div className="login-wrap py-5">
                            <h3 className="text-center mb-0">Crea tu cuenta</h3>
                            <p className="text-center">Introduce tus datos abajo</p>
                            <form action="#" className="login-form">
                                <p id="text-r" className="text-center mb-0">Introduce una foto de perfil y portada</p>

                                <div className="padding" >
                                    <div className="justify-content-center">
                                        <div className="card"> <img className="card-img-top" src={sketchflow} alt="Card image cap" />
                                            <div className="card-body little-profile text-center">
                                                <div className="pro-img" id="pfp" ><img className="img-thumbnail" width="40%" src={isotipo} alt="user" /></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group" name="profile-pic">
                                    <p id="text-r" className="text-center mb-0">Introduce una foto de perfil y portada</p>

                                   
                                </div>

                                <div className="form-group">
                                    <div className="icon d-flex align-items-center justify-content-center"><span className="fa fa-lock"></span></div>
                                    <input type="text" className="form-custom-control" placeholder="Nombre" required />
                                </div>
                                <div className="form-group">
                                    <div className="icon d-flex align-items-center justify-content-center"><span className="fa fa-user"></span></div>
                                    <input type="email" className="form-custom-control" placeholder="Email" required />
                                </div>

                                <div className="form-group">
                                    <div className="icon d-flex align-items-center justify-content-center"><span className="fa fa-mail-forward"></span></div>
                                    <input type="text" className="form-custom-control" placeholder="Username" required />
                                </div>

                                <div className="form-group">
                                    <div className="icon d-flex align-items-center justify-content-center"><span className="fa fa-lock"></span></div>
                                    <input type="password" className="form-custom-control" placeholder="Contraseña" required />
                                </div>

                                <div className="form-group">
                                    <textarea className="form-custom-control" name="" placeholder="Descripción" id="" cols="3" rows="3"></textarea>
                                </div>

                                <div className="form-group" id="grupo__genero">
                                    <label for="genero" className="formulario__label">Genero</label>
                                    <div className="input-block">
                                        <label className="rad-label">
                                            <input type="radio" className="rad-input gender" onclick="validarGenero()" name="rad" id="Hombre" value="Hombre" />
                                            <div className="rad-design rad-man"></div>
                                            <div className="rad-text">Hombre</div>
                                        </label>
                                        <label className="rad-label">
                                            <input type="radio" className="rad-input rad-woman gender" onclick="validarGenero()" name="rad" id="Mujer" value="Mujer" />
                                            <div className="rad-design rad-woman"></div>
                                            <div className="rad-text">Mujer</div>
                                        </label>
                                        <label className="rad-label">
                                            <input type="radio" className="rad-input rad-woman gender" onclick="validarGenero()" name="rad" id="Otro" value="Otro" />
                                            <div className="rad-design rad-other"></div>
                                            <div className="rad-text">Otro</div>
                                        </label>
                                    </div>
                                </div>


                                <div className="form-group" id="grupo__fecha">
                                    <label for="birthDate" className="formulario__label">Fecha Nacimiento:</label>
                                    <div className="formulario__grupo-input pb-2">
                                        <input type="date" className="bg-light w-100" name="FechaNacimiento" id="FechaNacimiento" />
                                        <br />
                                        <i className="formulario__validacion-estado fas fa-times-circle" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <button type="submit" className="redbutton form-custom-control submit px-3">REGISTRARTE</button>
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
}
