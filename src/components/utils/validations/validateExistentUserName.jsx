import { backend_url } from "../../../config";

export async function validateExistentUserName(value){
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            userName: value
        })
    };

    const response = await fetch(`${backend_url}existentUserName`, options);
    const data = await response.json();
    
    //console.log(data.result);
    
    if(response.status === 200){
        return "";
    }else{
        return data.result;
    }
}