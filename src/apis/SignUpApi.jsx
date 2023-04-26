import { backend_url } from "../config";
import { loadImage } from "../apis/LoadImageApi";
import { validateExistentMail } from "../components/utils/validations/validateExistentMail";
import { validateExistentUserName } from "../components/utils/validations/validateExistentUserName";

export async function signUpget(userName, password, email, name, birthDate, gender, profileImage, coverImage) {
    const coverImageURL = await loadImage(coverImage);
    const profileImageURL = await loadImage(profileImage);
    
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            userName: userName,
            password: password,
            email: email,
            profilePhoto: profileImageURL,
            coverPhoto: coverImageURL,
            name: name,
            gender: gender,
            birthDate: birthDate + 'T00:00:00.000Z',
        })
    };

    console.log(options);

    const response = await fetch(`${backend_url}signup`, options);
    //const data = await response.json();
    
    //if(response.status == 200){
    //    console.log(data);
    //}else{
    //    alert(data.result);
    //}
    return response;
}

export async function validateCredentials(setAlertMail, setAlertMailText, setAlerUserName, setAlertUserNameText) {
    let isValid = true;

    let varMail = document.getElementById('formMail');
    let varUserName = document.getElementById('formUserName');
    
    const mailValidation = await validateExistentMail(varMail.value);
    const userNameValidation = await validateExistentUserName(varUserName.value);

    if(mailValidation !== ""){
        setAlertMail(true);
        setAlertMailText(mailValidation);
        isValid = false;
    }else{
        setAlertMail(false);
        setAlertMailText("");
    }

    if(userNameValidation !== ""){
        setAlerUserName(true);
        setAlertUserNameText(userNameValidation);
        isValid = false;
    }else{
        setAlerUserName(false);
        setAlertUserNameText("");
    }

    return isValid;
}