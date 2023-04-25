import { loadImage } from "../apis/LoadImageApi";

export async function signUpget({userName, password, email, name, birthDate, gender, profileImage, coverImage}) {
    //const coverImageURL = await loadImage(coverImage);
    //const profileImageURL = await loadImage(profileImage);

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            userName: userName,
            password: password,
            email: email,
            profilePhoto: 'profileImageURL',
            coverPhoto: 'coverImageURL',
            name: name,
            gender: gender,
            birthDate: birthDate + 'T00:00:00.000Z',
        })
    };

    console.log(options);
    //alert("");
    /*const response = await fetch('http://localhost:8080/signup', options);
    const data = await response.json();
    
    if(response.status == 200){
        console.log(data);
    }else{
        alert(data.result);
    }*/
}