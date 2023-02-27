
    import isotipo from "../assets/images/isotipo.png";
    import logo from "../assets/images/sketchflow_logo.png";
    import sketchflow from "../assets/images/sketchflow.png";
    
    export function Login() {
        return (
    
    <div className="msger">
        
    <nav>
        <div className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
          <div className="container">
            <a href="#" className="navbar-brand">
              <strong>Bootleg Amazon</strong>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
    
            <div className="search-container">
                <input type="text" name="search" placeholder="Busca aquí" className="search-input"/>
                <a href="busqueda.html" className="search-btn">
                        <i className="fas fa-search"/>      
                </a>
            </div>
    
            <div className="collapse navbar-collapse" id="navbarHeader">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a href="#" className="nav-link active">Categorias</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Productos</a>
                    </li>
                    <li className=""></li>
                </ul>
                <a href="carrito.html" className="btn btn-primary">Carrito</a>
            </div>
          </div>
        </div>
    </nav>
        
        <header className="msger-header">
          <div className="msger-header-title">
            <i className="fas fa-comment-alt"></i>Nombre del vendedor
          </div>
          <div className="msger-header-options">
            <span><i className="fas fa-cog"></i></span>
          </div>
        </header>
      
        <main className="msger-chat">
          <div className="msg left-msg">
            <div
             className="msg-img"
             style={{backgroundImage: logo}}
            ></div>
      
            <div className="msg-bubble">
              <div className="msg-info">
                <div className="msg-info-name">BOT</div>
                <div className="msg-info-time">12:45</div>
              </div>
      
              <div className="msg-text">
                Hi, welcome to SimpleChat! Go ahead and send me a message. 😄
              </div>
            </div>
          </div>
      
          <div className="msg right-msg">
            <div
             className="msg-img"
             style={{backgroundImage: isotipo}}
            ></div>
      
            <div className="msg-bubble">
              <div className="msg-info">
                <div className="msg-info-name">Sajad</div>
                <div className="msg-info-time">12:46</div>
              </div>
      
              <div className="msg-text">
                You can change your name in JS section!
              </div>
            </div>
          </div>
        </main>
      
        <form className="msger-inputarea">
          <input type="text" className="msger-input" placeholder="Enter your message..."/>
          <button type="submit" className="msger-send-btn">Send</button>
        </form>
    </div>
    );
}
