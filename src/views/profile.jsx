import isotipo from "../assets/images/isotipo.png";
import logo from "../assets/images/sketchflow_logo.png";
import sketchflow from "../assets/images/sketchflow.png";
import { Link } from "react-router-dom";

export function Profile() {
    return (
        <section className="colorbox">
            <div className="gradient-custom-2 vw-100 container bg-light">
                <div className="py-3 h-100">
                    <div className="row h-100">
                        <div className="">
                            <div className="">
                                <div className="d-flex flex-row bg-dark banner" style={{ height: '200px' }} >
                                    <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '250px' }} >
                                        <img src={logo}
                                            alt="Generic placeholder image" className="borderprofile img-fluid img-thumbnail mt-4 mb-2"
                                            style={{ width: '200px' }} />
                                        <h2>Tu nombre</h2>
                                    </div>
                                </div>
                                <div className="p-4 text-black">
                                    <div className="d-flex justify-content-end  py-1">
                                        <Link>
                                            <button type="button" className="redbutton px-5" >Seguir</button> </Link>
                                        <Link to="/EditProfile" className="px-3 ">
                                            <button type="button" className="redbutton px-5" >Editar</button>
                                        </Link>
                                    </div>

                                    <div className="d-flex justify-content-end text-center py-1">


                                        <div>
                                            <p className="mb-1 h3">253</p>
                                            <p className=" text-muted mb-0">Ilustraciones</p>
                                        </div>
                                        <div className="px-3">
                                            <p className="mb-1 h3">1026</p>
                                            <p className=" text-muted mb-0">Followers</p>
                                        </div>
                                        <div>
                                            <p className="mb-1 h3">478</p>
                                            <p className=" text-muted mb-0">Following</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body p-4 text-black">
                                    <div className="mb-5">
                                        <p className="lead fw-normal mb-1">Sobre</p>
                                        <div className="p-4 ">
                                            <p className="font-italic mb-1">Descripción wonita </p>
                                        </div>
                                    </div>
                                    <p class="text-center">
                                        Se unió el 2023/02/27
                                    </p>
                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                        <p className="lead fw-normal mb-0">Trabajos recientes </p>
                                        <p className="mb-0"><a href="#!" className="text-muted">Mostrar todo</a></p>
                                    </div>
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active text-black" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Ilustraciones</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link text-black" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Bookmarks</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link text-black" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Contacto</button>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="myTabContent">
                                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"><div className="row py-2">

                                            <div className="col-md-2 py-2">
                                                <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp"
                                                    alt="image 1" className="w-100 rounded-3" />
                                            </div>
                                            <div className="col-md-2 py-2">
                                                <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
                                                    alt="image 1" className="w-100 rounded-3" />
                                            </div>
                                            <div className="col-md-2 py-2">
                                                <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp"
                                                    alt="image 1" className="w-100 rounded-3" />
                                            </div>
                                            <div className="col-md-2 py-2">
                                                <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
                                                    alt="image 1" className="w-100 rounded-3" />
                                            </div>
                                            <div className="col-md-2 py-2">
                                                <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp"
                                                    alt="image 1" className="w-100 rounded-3" />
                                            </div>
                                            <div className="col-md-2 py-2">
                                                <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
                                                    alt="image 1" className="w-100 rounded-3" />
                                            </div>

                                            <div className="col-md-2 py-2">
                                                <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp"
                                                    alt="image 1" className="w-100 rounded-3" />
                                            </div>
                                            <div className="col-md-2 py-2">
                                                <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
                                                    alt="image 1" className="w-100 rounded-3" />
                                            </div>

                                        </div>
                                        </div>
                                        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
                                        <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
                                    </div>




                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    );
}



