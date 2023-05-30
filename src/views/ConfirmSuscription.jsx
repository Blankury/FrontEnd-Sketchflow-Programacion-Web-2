import { CardInput } from "../components/subscriptionComponents/CardInput";
import { CvCInput } from "../components/subscriptionComponents/CvCInput";
import { ExpirationInput } from "../components/subscriptionComponents/ExpirationInput";
import { NameInput } from "../components/subscriptionComponents/NameInput";
import { TitleSubs } from "../components/subscriptionComponents/TitleSubs";
import { Link } from "react-router-dom";
import { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";


export function ConfirmSuscription() {
    const [cardName, setcardName] = useState("");
    const [cvc, setCVC] = useState("");
    const [cardNum, setCardnum] = useState("");
    const [expiration, setExpiration] = useState("");
    
    const[success, setSuccess] = useState(false);
    const[errorMessage, setErrorMessage] = useState('');
    const[orderId, setOrderId] = useState(false);

    const createOrder = (data, actions) =>{
        return actions.order.create({
            purchase_units: [
            {
                description: 'Suscripción PREMIUM de Sketchflow.',
                amount: {
                    currency_code: 'USD',
                    value: 10.00
                },
            },
        ],
        application_context:{
            shipping_preferencie: 'NO_SHIPPING'   
        }
        })
        .then((orderID) => {
            setOrderId(orderID)
            return  orderID
        })
    }
    const onApprove = (data, actions) =>{
        return actions.order.capture().then(function(details){
            const {payer} = details
            setSuccess(true)
        })
    }

    const onError = (data, actions) =>{
        setErrorMessage("un error ocurrió con el pago.")
    }

return(
    <div className="colorbox h-100">
        <div className="container bg-light p-5">
            <TitleSubs/>
            <div className="heading cf pe-5 ps-5">
                <h1 className="pt-3">Suscripción Premium</h1>
                <a href="" className="continue"> 10.00USD </a>
            </div>
            <div className="p-5 mt-4">
                <a className="continue continue--pen"  data-bs-toggle="collapse" href="#collapseCARD" role="button" aria-expanded="false" aria-controls="collapseCARD">
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
                <div className="collapse" id="collapseCARD">                           
                    <NameInput
                    
                    />
                    <CardInput
                    value={cardNum}
                    onChange={(e) => { setCardnum(e.target.value); }}
                    />
                    <ExpirationInput
                    value={expiration}
                    onChange={(e) => { setExpiration(e.target.value); }}
                    />
                    <CvCInput
                    value={cvc}
                    onChange={(e) => { setCVC(e.target.value); }}
                    />


                    <a className="continue continue--piyo mt-5">
                    <div className="continue__wrapper">
                        <span className="continue__text">Pagar</span>
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


                </div>        
            </div>

            <div style={{display:' flex', justifyContent: 'center'}}>          
                <PayPalScriptProvider
                options={{
                    "client-id":
                    "ATQ-jjai3AW1ytUP1S8UYKqCU-BlDUQzp0FydN1eVKJ94LziQggkEJp4dn8U5BgqLD30J6oQmkFSaNor"
                }}>
                <PayPalButtons  fundingSource="paypal" style={{label: 'pay',shape: 'pill', layout: 'horizontal', height: 55}} createOrder={createOrder} onApprove={onApprove} onError={onError} />
                
                {success ? (
                    <h4 className="ms-3 mt-2">Tu pago se completó con éxito.</h4>
                ) : null }
                </PayPalScriptProvider>
            </div>
        </div>
    </div>
);
}