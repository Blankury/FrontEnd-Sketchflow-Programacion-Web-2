import isotipo from "../assets/images/isotipo.png";
import logo from "../assets/images/sketchflow_logo.png";
import sketchflow from "../assets/images/sketchflow.png";

export function EditProfile() {
    return (
        <section  style={{ backgroundImage: 'url("https://cdnb.artstation.com/p/assets/images/images/040/976/007/large/geoffroy-thoorens-seqb-sh060-matte2d-v005.jpg?1630419673")' }}>
                <h2 class="h3 mb-4 page-title text-white">Configuración<nav></nav></h2>
                
                <div className="container justify-content-md-center">
                    <div class="row mt-5 align-items-center justify-content-center">
                        
                        <div class="col-md-3 text-center mb-5">
                            <div class="avatar avatar-xl">
                                <img src={logo} id="photoOriginal"/>
                            </div>
                        </div>
                        <div class="col">
                            <div class="row align-items-center">
                                <div class="col-md-7 ">
                                    <p class="mb-9 text-white">Usuario</p>
                                    <p class="small mb-9 text-white">Nombre</p>
                                </div>
                            </div>
                            <div class="row mb-4">
                                <div class="col-md-7">
                                    <p class="text-white">
                                        Usuario desde 2023/02/27                                          
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row justify-content-center">
                        <div className="col-md-6 col-lg-4">
                        <div class="login-wrap py-5" id="home2" role="tabpanel" aria-labelledby="home-tab">
                            <form action="" class="formulario" id="formulario">

                                <div className="form-group align-content-center" name="profile-pic">
                                    <p id="text-r" className="text-center mb-0">Introduce una foto de perfil y portada</p>

                                    <div className="photoPic">
                                        <div className="justify-content-center ">
                                            <div className="card"> <img className="card-img-top" src={sketchflow} alt="Card image cap" />
                                                <div className="card-body little-profile text-center">
                                                    <div className="pro-img" id="pfp" ><img className="img-thumbnail" width="40%" src={isotipo} alt="user" /></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div class="form-group" id="grupo__usuario">
                                    <label for="usuario" class="formulario__label">Usuario</label>
                                    <div class="form-group-input">

                                        <input type="text" class="form-login-control" name="usuario" id="usuario" placeholder="john123" />
                                    </div>
                                </div>
                                <div class="form-group" id="grupo__nombre">
                                    <label for="nombre" class="formulario__label">Nombre</label>
                                    <div class="form-group-input">
                                        <input type="text" class="form-login-control" name="nombre" id="nombre" placeholder="John Doe" />
                                    </div>
                                </div>
                                {/* <!-- Grupo: Contraseña --> */}
                                <div class="form-group" id="grupo__password">
                                    <label for="password" class="formulario__label">Contraseña</label>
                                    <div class="form-group-input">
                                        <input type="password" class="form-login-control" name="password" id="password" />
                                    </div>
                                </div>

                                <div class="form-group" id="grupo__correo">
                                    <label for="correo" class="formulario__label">Correo Electrónico</label>
                                    <div class="form-group-input">
                                        <input type="email" class="form-login-control" name="correo" id="correo" placeholder="correo@correo.com" />
                                    </div>
                                </div>

                                <div class="form-group" id="grupo__genero">

                                    <label for="genero" class="formulario__label">Genero</label>
                                    <div class="input-block">
                                        <label class="rad-label">
                                            <input type="radio" class="rad-input gender" onclick="validarGenero()" name="rad" id="Hombre" value="Hombre"/>
                                            <div class="rad-design rad-man"></div>
                                            <div class="rad-text">Hombre</div>
                                        </label>
                                        <label class="rad-label">
                                            <input type="radio" class="rad-input rad-woman gender" onclick="validarGenero()" name="rad" id="Mujer" value="Mujer"/>
                                            <div class="rad-design rad-woman"></div>
                                            <div class="rad-text">Mujer</div>
                                        </label>
                                        <label class="rad-label">
                                            <input type="radio" class="rad-input rad-woman gender" onclick="validarGenero()" name="rad" id="Otro" value="Otro"/>
                                            <div class="rad-design rad-other"></div>
                                            <div class="rad-text">Otro</div>
                                        </label>

                                    </div>
                                </div>

                                <div id="fb-root"></div>
<script async defer crossorigin="anonymous" src="https://connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v16.0&appId=692164095862938&autoLogAppEvents=1" nonce="bUQv6WPv"></script>

<div class="fb-login-button" data-width="" data-size="" data-button-type="" data-layout="" data-auto-logout-link="false" data-use-continue-as="true"></div>


                                <div className="form-group">
                                <button type="submit" className="redbutton form-login-control submit px-3">REGISTRARTE</button>
                                </div>

                                <div class="form-group">
                                    <button type="submit" className="blackbutton form-login-control submit px-3">ELIMINAR</button>
                                </div>
                            </form>
                        </div>
                        </div>



                    </div>
                </div>

        </section>

        
    );
};
