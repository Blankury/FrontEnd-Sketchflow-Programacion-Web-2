
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export const SendMessage = ({ userId}) => {

    localStorage.removeItem('anotherUser');
    console.log("se borró?" +     localStorage.getItem("anotherUser"));

    localStorage.setItem("anotherUser", userId);


    
    if ((userId != localStorage.userId) ) {
        return (
            <div className="d-flex justify-content-end  py-1">
                <button type="button" className="blackbutton px-5"  >
                <Link to={`/Chat/`+userId}>Enviar mensaje</Link>
                </button>
            </div>
        );

    }


};