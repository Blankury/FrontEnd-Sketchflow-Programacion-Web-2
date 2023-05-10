import React from "react";
import { Link } from "react-router-dom";

export const ModalMessage = ({text}) => {
    function reLoad(){
        window.location.reload(false);
    }
    return (
        <>
            <button type="button" id="modalButton1" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop1" hidden>
            Launch static backdrop modal
            </button>

            <div className="modal fade" id="staticBackdrop1" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">Modificar usuario</h1>
                    </div>
                    <div className="modal-body">
                        {text}
                    </div>
                    <div className="modal-footer">
                        <button type="button" class="btn btn-secondary" id="modalClose" data-bs-dismiss="modal" hidden>Close</button>
                        <button type="button" className="btn btn-primary" id="modalSkip" onClick={() => reLoad()} data-bs-dismiss="modal">Aceptar</button>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
}