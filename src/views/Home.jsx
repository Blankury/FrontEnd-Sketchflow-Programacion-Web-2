import isotipo from "../assets/images/isotipo.png";
import logo from "../assets/images/isotipo.png";
import sketchflow from "../assets/images/isotipo.png";

export function Home() {
  return (
    <section className="vh-100 bg-light">
     <nav className="navbar navbar-expand-lg navbar-light colorPrimary">
  <div className="container-fluid">
    <a className="navbar-brand text-white" href="#">
          <img src={isotipo} alt="" width="50" height="50" className="d-inline-block align-text-top"/>
    Sketchflow</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active text-white" aria-current="page" href="#">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#"> Opcion</a>
        </li>
      </ul>
      <form className="d-flex mx-auto px-5">
        <input className="form-control me-2 searchbar" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline colortertiary rounded-3" type="submit">Buscar</button>
      </form>
      <button className="btn btn-outline colorSecondary rounded-3 px-5" type="button">Publicar</button>

      <div className="nav-item dropdown px-5">
          <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle='dropdown' aria-expanded="false">
            Usuario
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Perfil</a></li>
            <li><a className="dropdown-item" href="#"> Configurar perfil </a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Cerrar sesión</a></li>
          </ul>
        </div>
    </div>
  </div>
</nav>



    </section>
  );
}
