import isotipo from "../assets/images/isotipo.png";
import logo from "../assets/images/sketchflow_logo.png";
import sketchflow from "../assets/images/sketchflow.png";
import { Link } from "react-router-dom";
import { useState } from "react";


export function Artwork() {
    const [commentText, setComment] = useState("");
    return (
        <section className="colorbox  py-5" >
            <br />
            <div className="container bg-light">
                <div className="row ">
                    <div className="col-md-8">
                        <img src={logo} className=" wh-100" alt="..." />
                        <hr />
                        <div className="row ">
                            <div className="col-md-8">
                                <h3>Nombre de ilustración</h3>
                            </div>
                            <div className="col-md-4">
                                <div className="d-flex  justify-content-end">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className=" bi bi-bookmark nav-icon justify-content-end" viewBox="0 0 16 16">
                                        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <a href="#" style={{ textDecoration: 'none' }}> #Etiqueta1 </a>
                        <a href="#" style={{ textDecoration: 'none' }}> #Etiqueta1 </a>
                        <p> Descripcion ugu </p>
                    </div>
                    <div className="col-md-4 text-center">
                        <div className="d-flex mt-4 mb-2">
                            <img src={logo}
                                alt="..." className="borderprofile img-fluid img-thumbnail"
                                style={{ width: '100px' }} />

                            <h4 className="py-4 px-3" > <a href="profile">Usuario </a></h4>
                        </div>
                        <button type="button" className="redbutton px-5 " >Seguir</button>
                        <hr />
                        <h6 className="py-4 px-3" > Otros trabajos </h6>
                        <div className="row">
                            <div className="col-md-4 py-2">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp"
                                    alt="image 1" className="w-100 rounded-3" />
                            </div>
                            <div className="col-md-4 py-2">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp"
                                    alt="image 1" className="w-100 rounded-3" />
                            </div>
                            <div className="col-md-4 py-2">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp"
                                    alt="image 1" className="w-100 rounded-3" />
                            </div>
                            <div className="col-md-4 py-2">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
                                    alt="image 1" className="w-100 rounded-3" />
                            </div>
                        </div>
                    </div>

                    <h3> Comentarios </h3>
                    <span>
                        <img src={logo} alt="" width='40px' /> <label> Nombre de usuario </label> <br />
                        <textarea name="" id="" cols="20" rows="4" className="full_input" placeholder="Añade un comentario del producto." 
                                              required value={commentText} onChange={(e) => {
                                                setComment(e.target.value);  }} />
                    </span>
                    <span>
                        <img src={logo} alt="" width='40px' />
                        <label> Nombre de usuario </label>
                        <br />
                        <p>Comentario</p>
                        <br />
                        <img src={logo} alt="" width='40px' />
                        <label> Nombre de usuario </label>
                        <br />
                        <p>Comentario</p>
                        <br />
                    </span>
                </div>
            </div>

        </section>


    );
}
