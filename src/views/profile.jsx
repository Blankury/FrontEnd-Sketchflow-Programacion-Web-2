import isotipo from "../assets/images/isotipo.png";
import logo from "../assets/images/sketchflow_logo.png";
import sketchflow from "../assets/images/sketchflow.png";

export function Profile() {
    return (
        <section className="bg-light py-5">
            <div>
                <div className="container-fluid">
                    <img src={logo} width="200" height="200" className="float-left borderimg" alt="..." />
                </div>
            </div>
            <p> Nombre de usuario</p>


            <div className="h-100 gradient-custom-2">
                <div className="container-fluid py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-lg-9 col-xl-7">
                            <div className="card">
                                <div className="rounded-top text-white d-flex flex-row bg-dark" style={{ height: '200px' }} >
                                    <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }} >
                                        <img src={logo}
                                            alt="Generic placeholder image" className="borderimg img-fluid img-thumbnail mt-4 mb-2"
                                            style={{ width: '150px', zIndex: '1' }} />

                                        <button type="button" className="btn btn-outline-dark" data-mdb-ripple-color="dark"
                                            style={{ zIndex: '1' }}>
                                            Edit profile
                        </button>
                                    </div>


                                </div>
                                <div className="p-4 text-black">
                                    <div className="d-flex justify-content-end text-center py-1">
                                        <div>
                                            <p className="mb-1 h5">253</p>
                                            <p className="small text-muted mb-0">Photos</p>
                                        </div>
                                        <div className="px-3">
                                            <p className="mb-1 h5">1026</p>
                                            <p className="small text-muted mb-0">Followers</p>
                                        </div>
                                        <div>
                                            <p className="mb-1 h5">478</p>
                                            <p className="small text-muted mb-0">Following</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body p-4 text-black">
                                    <div className="mb-5">
                                        <p className="lead fw-normal mb-1">About</p>
                                        <div className="p-4 ">
                                            <p className="font-italic mb-1">Descripción wonita </p>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                        <p className="lead fw-normal mb-0">Recent photos</p>
                                        <p className="mb-0"><a href="#!" className="text-muted">Show all</a></p>
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
                                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"><div className="row g-2">
                                        
                                        <div className="col mb-2">
                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp"
                                                alt="image 1" className="w-100 rounded-3" />
                                        </div>
                                        <div className="col mb-2">
                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
                                                alt="image 1" className="w-100 rounded-3" />
                                        </div>
                                    </div>
                                    <div className="row g-2">
                                        <div className="col">
                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp"
                                                alt="image 1" className="w-100 rounded-3" />
                                        </div>
                                        <div className="col">
                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp"
                                                alt="image 1" className="w-100 rounded-3" />
                                        </div>
                                    </div></div>
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
