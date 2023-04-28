import { backend_url } from "../../../config";

export async function validateExistentMail(value){
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email: value
        })
    };
    
    const response = await fetch(`${backend_url}existentMail`, options);
    const data = await response.json();
    
    //console.log(data.result);
    
    if(response.status === 200){
        return "";
    }else{
        return data.result;
    }
}