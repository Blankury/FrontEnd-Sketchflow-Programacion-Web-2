import React from "react";
import { Link } from "react-router-dom";

export const ModalMessage = ({text}) => {
    return (
        <>
            <button type="button" id="modalButton1" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop1" hidden>
            Launch static backdrop modal
            </button>

            <div class="modal fade" id="staticBackdrop1" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="staticBackdropLabel">Crear nuevo usuario</h1>
                    </div>
                    <div class="modal-body">
                        {text}
                    </div>
                    <div class="modal-footer">
                        <Link to="/home"><button type="button" class="btn btn-primary" data-bs-dismiss="modal">Continuar</button></Link>
                    </div>
                    </div>
                </div>
            </div>
            

            <button type="button" id="modalButton2" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop2" hidden>
                Launch static backdrop modal
            </button>
            <div class="modal fade" id="staticBackdrop2" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="staticBackdropLabel">Crear nuevo usuario</h1>
                    </div>
                    <div class="modal-body">
                        {text}
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
}