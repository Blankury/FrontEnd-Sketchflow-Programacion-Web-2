import React from "react";
import { Link } from "react-router-dom";

export const ModalMessage = ({text}) => {
    return (
        <>
            <button type="button" id="modalButton1" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop1" hidden>
            Launch static backdrop modal
            </button>

            <div className="modal fade" id="staticBackdrop1" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">Crear nuevo usuario</h1>
                    </div>
                    <div className="modal-body">
                        {text}
                    </div>
                    <div className="modal-footer">
                        <Link to="/home"><button type="button" className="btn btn-primary" data-bs-dismiss="modal">Continuar</button></Link>
                    </div>
                    </div>
                </div>
            </div>
            

            <button type="button" id="modalButton2" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop2" hidden>
                Launch static backdrop modal
            </button>
            <div className="modal fade" id="staticBackdrop2" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">Crear nuevo usuario</h1>
                    </div>
                    <div className="modal-body">
                        {text}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
}