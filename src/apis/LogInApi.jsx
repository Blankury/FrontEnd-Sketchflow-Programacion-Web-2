import { backend_url } from "../config";

export async function logInGet(userName, password) {
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            userName: userName,
            password: password
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