
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export const SendMessage = ({ userId}) => {

    localStorage.removeItem('anotherUser');
    console.log("se borró?" +     localStorage.getItem("anotherUser"));

    localStorage.setItem("anotherUser", userId);

    console.log("AAAA" + userId);
    console.log("guardar" +     localStorage.getItem("anotherUser"));
    
    if ((userId != localStorage.userId) ) {
        console.log("primer if postivio");
        return (
            <div className="d-flex justify-content-end py-1">
                <button type="button" className="blackbutton px-5"  >
                <Link to={`/Chat/`+userId} style={{textDecoration: 'none'}}>Enviar mensaje</Link>
                </button>
            </div>
        );

    }


};