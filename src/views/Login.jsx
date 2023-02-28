import isotipo from "../assets/images/isotipo.png";
import logo from "../assets/images/sketchflow_logo.png";
import sketchflow from "../assets/images/sketchflow.png";

export function Login() {
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
                            <form action="#" className="login-form">
                                <div className="form-group">
                                    <div className="icon d-flex align-items-center justify-content-center"><span className="fa fa-user"></span></div>
                                    <input type="text" className="form-login-control" placeholder="Username" required />
                                </div>
                                <div className="form-group">
                                    <div className="icon d-flex align-items-center justify-content-center"><span className="fa fa-lock"></span></div>
                                    <input type="password" className="form-login-control" placeholder="Password" required />
                                </div>
                                <div className="form-group d-md-flex">
                                    <div className="w-100 text-md-right">
                                        <a href="#">¿Olvidó la contraseña?</a>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="redbutton form-login-control submit px-3">INICIA SESIÓN</button>
                                </div>
                            </form>
                            <div className="w-100 text-center mt-4 text">
                                <p className="mb-0">¿No tienes una cuenta?</p>
                                <a href="#">Registrate</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}
