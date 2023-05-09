import { backend_url } from "../config";
import { loadImage } from "./LoadImageApi";

export async function editProfileApi( userId, profileImage, coverImage, description, name, password, gender, paypalLink, twitterLink, facebookLink, token ) {
    const profileImageURL = await loadImage(profileImage);
    const coverImageURL = await loadImage(coverImage);
    
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'token': token },
        body: JSON.stringify({
            userId: userId,
            profilePhoto:  profileImageURL || null,
            coverPhoto: coverImageURL || null,
            description: description || null,
            name: name,
            password: password || null,
            gender: gender,
            paypalLink: paypalLink || null,
            twitterLink: twitterLink || null,
            facebookLink: facebookLink || null,
        }),
    };

    const response = await fetch(`${backend_url}editProfile`, options);

    return response;
}