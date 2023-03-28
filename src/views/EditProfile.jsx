import isotipo from "../assets/images/isotipo.png";
import logo from "../assets/images/sketchflow_logo.png";
import sketchflow from "../assets/images/sketchflow.png";
import { Link } from "react-router-dom";
import { useState } from "react";




export function EditProfile() {
    const Final = true;
      
      const [Username, setUsername] = useState("");
      const [desc, setDesc] = useState("");
      const [link1, setLink1] = useState("");
      const [link2, setLink2] = useState("");
      const [link3, setLink3] = useState("");
      const [name, setName] = useState("");
      const [password, setPassword] = useState("");
      const [email, setEmail] = useState("");
      const [files, setFiles] = useState([]);

      const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setFiles(URL.createObjectURL(event.target.files[0]));
        }
       }


    return (
        <section className="colorbox h-100">
            <div className="gradient-custom-2 vw-100 container bg-light">
                <div className="py-3 h-100">
                    <div className="row h-100">
                        <div className="">
                            <div className="py-5">
                                <h2 className="h3 mb-4 page-title text-center">Configuración de perfil</h2>
                                <input type="file" onChange={onImageChange} className="filetype" />
                                <div className="d-flex flex-row bg-dark banner" style={{ height: '200px' }} >
                                    
                                    <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '250px' }} >
                                        <img src={logo}
                                            alt="Generic placeholder image" className="borderprofile img-fluid img-thumbnail mt-4 mb-2"
                                            style={{ width: '200px' }}
                                            
                                            />

                                        <p className="lead fw-normal mb-1">Usuario</p>

                                        <input type="text" className="h-5 " placeholder="Username" required 
                                                               value={Username} onChange={(e) => {

                                                                const re = /^[a-zA-Z0-9\_\-]{1,16}$/;

                                                                if (e.target.value === "" || re.test(e.target.value)) {
                                                                    setUsername(e.target.value);  
                                                                }

                                                                }}/>
                                    </div>
                                </div>
                                <div className="p-4 text-black">
                                    <div className="d-flex justify-content-end text-center py-1">
                                        <input type="file" onChange={onImageChange} className="filetype redbutton" />
                                        

                                        <Link to="/UploadImage" className="px-3 ">
                                            <button type="submit" className="redbutton form-custom-control px-3">GUARDAR</button>
                                        </Link>
                                    </div>
                                </div>
                                <div className="card-body p-4 text-black  py-5">
                                    <p className="lead fw-normal mb-1">Sobre</p>
                                    <input type="text" className=" w-100 " placeholder="Biografia"                       
                                        required value={desc} onChange={(e) => {
                                        setDesc(e.target.value);  }} />
                                </div>
                                <hr />
                                <div className="container colorPrimary py-3">
                                    <h2 className="h3 mb-4 page-title text-center text-white">Configuración de la cuenta</h2>
                                    <p className="text-white text-center">
                                        Se unió el 2023/02/27
                                    </p>
                                    <form><label for="nombre" className="formulario__label">Links</label>
                                        <input type="text" className="h-5 form-custom-control" placeholder="Link1" required 
                                                               value={link1} onChange={(e) => {

                                                                const re = new RegExp('(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$');  

                                                                if (e.target.value === "" || re.test(e.target.value)) {
                                                                    setLink1(e.target.value);  
                                                                }

                                                                }}/>

                                        <input type="text" className="h-5 form-custom-control" placeholder="Link2" required 
                                                               value={link2} onChange={(e) => {

                                                                const re = new RegExp('(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$');  

                                                                if (e.target.value === "" || re.test(e.target.value)) {
                                                                    setLink2(e.target.value);  
                                                                }

                                                                }}/>
                                        <input type="text " className="h-5 form-custom-control" placeholder="Link3" required 
                                                                value={link3} onChange={(e) => {

                                                                const re = new RegExp('(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$');  
                                        
                                                                if (e.target.value === "" || re.test(e.target.value)) {
                                                                    setLink3(e.target.value);  
                                                                }
                                        
                                        }}/>

                                        <br />
                                        <label for="nombre" className="formulario__label">Nombre</label>
                                        <div className="form-group-input">
                                            <input type="text" className="form-custom-control" name="nombre" id="nombre" placeholder="John Doe" 
                                            value={name} onChange={(e) => {
                                                setName(e.target.value);
                                              }}        />
                                        </div>

                                        <div className="form-group" id="grupo__password">
                                            <label for="password" className="formulario__label">Contraseña</label>
                                            <div className="form-group-input">
                                                <input type="password" className="form-custom-control" name="password" id="password" 
                                                    value={password} onChange={(e) => {

                                                    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.* )(?=.*[^a-zA-Z0-9]).{8,}$/;
                                                
                                                     if (e.target.value === "" || re.test(e.target.value)) {
                                                        setPassword(e.target.value);  
                                                    }
                                                
                                                }}/>
                                            </div>
                                        </div>
                                        <div className="form-group" id="grupo__correo">
                                            <label for="correo" className="formulario__label">Correo Electrónico</label>
                                            <div className="form-group-input">
                                                <input type="email" className="form-custom-control" name="correo" id="correo" placeholder="correo@correo.com"
                                                    value={email} onChange={(e) => {

                                                        const re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                                                    
                                                         if (e.target.value === "" || re.test(e.target.value)) {
                                                            setEmail(e.target.value);  
                                                        }
                                                    
                                                    }}/>
                                            </div>
                                        </div>
                                        <div className="form-group" id="grupo__genero">
                                            <label for="genero" className="formulario__label">Genero</label>
                                            <div className="input-block">
                                                <label className="rad-label">
                                                    <input type="radio" className="rad-input gender" onClick={validarGenero()} name="rad" id="Hombre" value="Hombre" />
                                                    <div className="rad-design rad-man"></div>
                                                    <div className="rad-text">Hombre</div>
                                                </label>
                                                <label className="rad-label">
                                                    <input type="radio" className="rad-input rad-woman gender" onClick={validarGenero()} name="rad" id="Mujer" value="Mujer" />
                                                    <div className="rad-design rad-woman"></div>
                                                    <div className="rad-text">Mujer</div>
                                                </label>
                                                <label className="rad-label">
                                                    <input type="radio" className="rad-input rad-woman gender" onClick={validarGenero()} name="rad" id="Otro" value="Otro" />
                                                    <div className="rad-design rad-other"></div>
                                                    <div className="rad-text">Otro</div>
                                                </label>

                                            </div>
                                            <Link to="/UploadImage" className="px-3 ">
                                                <div className="form-group">
                                                    <button type="submit" onClick={validarTodo()} className="redbutton form-custom-control submit px-3">GUARDAR</button>
                                                </div> </Link>
                                            <Link to="/UploadImage" className="px-3 ">
                                                <div className="form-group">
                                                    <button type="submit" className="blackbutton form-custom-control submit px-3">ELIMINAR PERFIL</button>
                                                </div>
                                            </Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </section>


    );

    async function validarGenero(){
        if(document.getElementById("Hombre").checked == false && document.getElementById("Mujer").checked == false && document.getElementById("Otro").checked == false){
            Final = false;
        }else{
            Final = true;
        }
    }

    async function validarTodo(){
        if(Final)
        {
            alert('Editado con exito');
        }else{
          alert('Error');
        }
    }
};
