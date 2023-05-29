import isotipo from "../assets/images/isotipo.png";
import logo from "../assets/images/sketchflow_logo.png";
import sketchflow from "../assets/images/sketchflow.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import "../apis/paypal/config";

export function ConfirmSuscription() {

    let productName = "Producto demostración";
    let currency = "MXN";
    let productPrice = 10;
    let productId = 587965;
    let orderNumber = 567;

return(
    <div className="colorbox h-100">

    <div className="container bg-light vh-100 pt-5 ps-5 pe-5">
        <h1 className="projTitle">Compruebe su orden</h1>
        <div className="heading cf">
            <h1>Nombre del usuario</h1>
            <a href="page_principal.html" className="continue">Ver perfil del usuario</a>
        </div>

        <div clas="subtotal cf">
        <ul>
          <li>
          <a href="#" className="continue continue--piyo">
            <div className="continue__wrapper">
                <span className="continue__text">Pagar con tarjeta</span>
            </div>
            <div className="characterBox">
                <div className="character wakeup">
                    <div className="character__face"></div>
                </div>
                <div className="character wakeup">
                    <div className="character__face"></div>
                </div>
                <div className="character wakeup">
                    <div className="character__face"></div>
                </div>
            </div>
          </a>
          </li>

          <li className="totalRow"><a href="#" className="btn continue m-2">Pagar con Paypal</a></li>

        </ul>
      </div>




    </div>


</div>


);
}