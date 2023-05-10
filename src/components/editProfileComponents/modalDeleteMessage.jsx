import React from "react";
import { Link } from "react-router-dom";

export const ModalDeleteMessage = ({deleteUser}) => {
    return (
        <>

            <div className="modal fade" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">Eliminar usuario</h1>
                    </div>
                    <div className="modal-body">
                        ¿Estas seguro que quieres eliminar tú usuario?
                    </div>
                    <div className="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        <button type="button" className="btn btn-primary" id="modalSkip" data-bs-dismiss="modal" onClick={deleteUser}>Aceptar</button>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
}