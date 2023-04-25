export async function validateExistentUserName(value){
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            userName: value
        })
    };

    const response = await fetch('http://localhost:8080/existentUserName', options);
    const data = await response.json();
    
    //console.log(data.result);
    
    if(response.status === 200){
        return "";
    }else{
        return data.result;
    }
}