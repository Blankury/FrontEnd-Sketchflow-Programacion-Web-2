import isotipo from "../assets/images/isotipo.png";
import logo from "../assets/images/sketchflow_logo.png";
import sketchflow from "../assets/images/sketchflow.png";


export function Signin() {

    return (


        <section className="m-lg-1">
            <div className="container justify-content-md-center">
                <div className="row justify-content-center">
                    <div className="col-md-6 text-center mb-3">
                        <img src={logo} alt="" className="justify-content-center" style={{width:'40%'}}  />
                    </div>

                </div>
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-4">
                        <div className="login-wrap py-5">
                            <h3 className="text-center mb-0">Crea tu cuenta</h3>
                            <p className="text-center">Introduce tus datos abajo</p>
                            <form action="#" className="login-form">

                                <div className="form-group" name="profile-pic">
                                    <p id="text-r" className="text-center mb-0">Introduce una foto de perfil y portada</p>

                                    <div className="padding">
                                        <div className="justify-content-center">
                                            <div className="card"> <img className="card-img-top" src={sketchflow} alt="Card image cap" />
                                                <div className="card-body little-profile text-center">
                                                    <div className="pro-img" id="pfp" ><img className="img-thumbnail" width="40%" src={isotipo} alt="user" /></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="form-group">
                                    <div className="icon d-flex align-items-center justify-content-center"><span className="fa fa-lock"></span></div>
                                    <input type="text" className="form-control" placeholder="Nombre" required />
                                </div>
                                <div className="form-group">
                                    <div className="icon d-flex align-items-center justify-content-center"><span className="fa fa-user"></span></div>
                                    <input type="email" className="form-control" placeholder="Email" required />
                                </div>

                                <div className="form-group">
                                    <div className="icon d-flex align-items-center justify-content-center"><span className="fa fa-mail-forward"></span></div>
                                    <input type="text" className="form-control" placeholder="Username" required />
                                </div>

                                <div className="form-group">
                                    <div className="icon d-flex align-items-center justify-content-center"><span className="fa fa-lock"></span></div>
                                    <input type="password" className="form-control" placeholder="Contraseña" required />
                                </div>

                                <div className="form-group">
                                    <textarea className="form-control" name="" placeholder="Descripción" id="" cols="3" rows="3"></textarea>
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
                                    <div className="formulario__grupo-input">
                                        <input type="date" name="FechaNacimiento" id="FechaNacimiento" />
                                        <br />
                                        <i className="formulario__validacion-estado fas fa-times-circle" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <button type="submit" className="btn form-control btn-primary rounded submit px-3">Registrarte</button>
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
