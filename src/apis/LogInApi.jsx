import { clearLogStorage } from "../components/utils/LocalStorageUtils";
import { backend_url } from "../config";

export async function logInGet(userName, password, sessionCheck) {
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            userName: userName,
            password: password,
            isTemp: sessionCheck
        })
    };

    //console.log(options);

    const response = await fetch(`${backend_url}login`, options);
    //const data = await response.json();

    //if (response.status == 200) {
    //    console.log(data.userLog);
    //} else {
    //    console.log(data.result);
    //    console.log(response.status);
    //    alert(data.result);
    //}

    return response;
}

export async function getLoggedUser(userId, token) {
    if(userId !== null || userId !== ""){
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'token': token }, //poner token aqui
            body: JSON.stringify({
                userId: userId
            })
        };
    
        const response = await fetch(`${backend_url}getUser`, options);
        const data = await response.json();
        //console.log(data);
        
        return data;
    }
    return null;
}

export async function logOut(token) {
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'token': token }, //poner token aqui
        body: JSON.stringify({})
    };
    
    const response = await fetch(`${backend_url}logout`, options);
    const data = await response.json();
    console.log(data);
    //clearLogStorage();
    
    if(response.status === 200){
        return data;
    }else{
        return null;
    }
}