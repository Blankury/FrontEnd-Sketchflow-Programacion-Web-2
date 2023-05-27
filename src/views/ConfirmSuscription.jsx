import isotipo from "../assets/images/isotipo.png";
import logo from "../assets/images/sketchflow_logo.png";
import sketchflow from "../assets/images/sketchflow.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

export function ConfirmSuscription() {
return(
    <div class="wrap cf">
        <h1 class="projTitle">Compruebe su orden</h1>
        <div class="heading cf">
            <h1>Nombre del usuario</h1>
            <a href="page_principal.html" class="continue">Ver perfil del usuario</a>
        </div>

        <div clas="subtotal cf">
        <ul>
          <li>
          <a href="#" class="continue continue--piyo">
            <div class="continue__wrapper">
                <span class="continue__text">Pagar con tarjeta</span>
            </div>
            <div class="characterBox">
                <div class="character wakeup">
                    <div class="character__face"></div>
                </div>
                <div class="character wakeup">
                    <div class="character__face"></div>
                </div>
                <div class="character wakeup">
                    <div class="character__face"></div>
                </div>
            </div>
          </a>
          </li>

          <li class="totalRow"><a href="#" class="btn continue m-2">Pagar con Paypal</a></li>

        </ul>
      </div>




    </div>





);
}