import { backend_url } from "../config";

export async function loadImage(photo){
    const formData = new FormData();
    formData.append("foto", photo);
    
    const optionFetch = {
        method: 'POST',
        //headers: { 'Content-Type': 'multipart/form-data' },
        body: formData
    };
    
    const response = await fetch(`${backend_url}uploadFile`, optionFetch);
    const data = await response.json();

    if (response.status === 200) {
        //console.log(response.status);
        return data.url;
    } else {
        console.log('Ocurrió un error al cargar la imagen');
        //console.log(response.status);
        return '';
    }
}