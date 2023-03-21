import isotipo from "../assets/images/isotipo.png";
import logo from "../assets/images/sketchflow_logo.png";
import sketchflow from "../assets/images/sketchflow.png";
import { Link } from "react-router-dom";
import { useState } from "react";

export function UploadImage() {
  const [nameArtwork, setName] = useState("");
  const [descArtwork, setDesc] = useState("");
  const [priceArtwork, setPrice] = useState("");


  return (
    <section className="colorbox  py-5" >
      <div className=" px-5 bg-dark h-50 text-white row d-flex align-items-center justify-content-center">
        <div className=" py-5 text-white text-center">
          <input className=" redbutton" type="file" id="formFile" />
          <hr />
          <p>JPEG / GIF / PNG</p>
          <p>
            You can upload up to 32 MB per file and a maximum of 200 files (the total file size must be less than 200 MB)</p>
        </div>
      </div>
      <br />
      <br />

      <div className="gradient-custom-2 container colorPrimaryvariant  ">
        <form>
          <label for="artwork_name" className="formulario__label">artwork_name de la ilustración</label>
          <input type="text" className="form-custom-control" name="artwork_name" id="artwork_name" placeholder="artwork_name de la ilustración" 
          required value={nameArtwork} onChange={(e) => {
            setName(e.target.value);
          }}        
          />
          <label for="artwork_caption" className="formulario__label">Descripción</label>
          <div className="form-group-input">
            <input type="email" className="form-custom-control" name="artwork_caption" id="artwork_caption" placeholder="artwork_caption" 
                            required value={descArtwork} onChange={(e) => {
                              setDesc(e.target.value);  }}         
            />
          </div>
          <div className="form-group" id="restricciones">
            <label >Restricción de edad</label>
            <div className="input-block">
              <label className="rad-label">
                <input type="radio" className="rad-input " name="rad" id="Todos" value="Todos"

                               />
                <div className="rad-design "></div>
                <div className="rad-text"> Todos </div>
              </label>
              <label className="rad-label">
                <input type="radio" className="rad-input gender" name="rad" id="R-18" value="R-18"

                                               />
                <div className="rad-design"></div>
                <div className="rad-text">R-18</div>
              </label>

              <label >Visibilidad</label>
              <div className="input-block">
                <label className="rad-label">
                  <input type="radio" className="rad-input " name="rad" id="Publico" value="Publico"
 />
                  <div className="rad-design "></div>
                  <div className="rad-text"> Publico </div>
                </label>
                <label className="rad-label">
                  <input type="radio" className="rad-input " name="rad" id="Privado" value="Privado" />
                  <div className="rad-design "></div>
                  <div className="rad-text"> Privado </div>
                </label>
                <label className="rad-label">
                  <input type="radio" className="rad-input gender" name="rad" id="Pago" value="Pago" />
                  <div className="rad-design"></div>
                  <div className="rad-text">De pago </div>
                </label>
              </div>
              <label for="artwork_price" className="formulario__label">Precio</label>
              <input type="text" className="form-custom-control" name="artwork_price" id="artwork_price" placeholder="Precio de la ilustración" 
                                          required value={priceArtwork} onChange={(e) => {
                                            setPrice(e.target.value); }}         
                                            />

            </div>
            <Link to="/Artwork" className="px-3 ">
              <div className="form-group">
                <button type="submit" className="redbutton form-custom-control submit px-3">Publicar</button>
              </div> </Link>
          </div>
        </form>
      </div>
    </section>


  );
}

