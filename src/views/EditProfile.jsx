import isotipo from "../assets/images/isotipo.png";
import logo from "../assets/images/sketchflow_logo.png";
import sketchflow from "../assets/images/sketchflow.png";
import { Link } from "react-router-dom";

export function EditProfile() {
    return (
        <section className="colorbox h-100">
            <div className="gradient-custom-2 vw-100 container bg-light">
                <div className="py-3 h-100">
                    <div className="row h-100">
                        <div className="">
                            <div className="py-5">
                                <h2 className="h3 mb-4 page-title text-center">Configuración de perfil</h2>
                                <div className="d-flex flex-row bg-dark banner" style={{ height: '200px' }} >
                                    <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '250px' }} >
                                        <img src={logo}
                                            alt="Generic placeholder image" className="borderprofile img-fluid img-thumbnail mt-4 mb-2"
                                            style={{ width: '200px' }} />
                                        <p className="lead fw-normal mb-1">Usuario</p>

                                        <input type="text" className="h-5 " placeholder="Username" required />
                                    </div>
                                </div>
                                <div className="p-4 text-black">
                                    <div className="d-flex justify-content-end text-center py-1">
                                        <Link to="/UploadImage" className="px-3 ">
                                            <button type="submit" className="redbutton form-login-control px-3">GUARDAR</button>
                                        </Link>
                                    </div>
                                </div>
                                <div className="card-body p-4 text-black  py-5">
                                    <p className="lead fw-normal mb-1">Sobre</p>
                                    <input type="text" className=" w-100 " placeholder="Biografia" required />
                                </div>
                                <hr />
                                <div className="container colorPrimary py-3">
                                    <h2 className="h3 mb-4 page-title text-center text-white">Configuración de la cuenta</h2>
                                    <p className="text-white text-center">
                                        Se unió el 2023/02/27
                                    </p>
                                    <label for="nombre" className="formulario__label">Links</label>
                                    <input type="text" className="h-5 form-login-control" placeholder="Link1" required />
                                    <input type="text" className="h-5 form-login-control" placeholder="Link2" required />
                                    <input type="text " className="h-5 form-login-control" placeholder="Link3" required />

                                    <br />
                                    <label for="nombre" className="formulario__label">Nombre</label>
                                    <div className="form-group-input">
                                        <input type="text" className="form-login-control" name="nombre" id="nombre" placeholder="John Doe" />
                                    </div>

                                    {/* <!-- Grupo: Contraseña --> */}
                                    <div className="form-group" id="grupo__password">
                                        <label for="password" className="formulario__label">Contraseña</label>
                                        <div className="form-group-input">
                                            <input type="password" className="form-login-control" name="password" id="password" />
                                        </div>
                                    </div>
                                    <div className="form-group" id="grupo__correo">
                                        <label for="correo" className="formulario__label">Correo Electrónico</label>
                                        <div className="form-group-input">
                                            <input type="email" className="form-login-control" name="correo" id="correo" placeholder="correo@correo.com" />
                                        </div>
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
                                        <Link to="/UploadImage" className="px-3 ">
                                            <div className="form-group">
                                                <button type="submit" className="redbutton form-login-control submit px-3">GUARDAR</button>
                                            </div> </Link>
                                        <Link to="/UploadImage" className="px-3 ">
                                            <div className="form-group">
                                                <button type="submit" className="blackbutton form-login-control submit px-3">ELIMINAR PERFIL</button>
                                            </div></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </section>


    );
};
