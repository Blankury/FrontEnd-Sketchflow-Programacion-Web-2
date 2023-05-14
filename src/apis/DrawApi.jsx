import { backend_url } from "../config";
import { loadImage } from "./LoadImageApi";

export async function uploadDrawApi( userId, draw, title, description, restrict18, isPublic, tags, token ) {
    const drawImageURL = await loadImage(draw);
    let boolRestrict18 = true;
    let boolIsPublic = true;
    if(restrict18 === "Todos"){
        boolRestrict18 = false;
    }
    if(isPublic === "Privado"){
        boolIsPublic = false;
    }

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'token': token },
        body: JSON.stringify({
            userId: userId,
            draw: drawImageURL,
            title: title,
            description:  description || null,
            restrict18: boolRestrict18,
            isPublic: boolIsPublic,
        }),
    };
    const response = await fetch(`${backend_url}uploadDraw`, options);
    const data = await response.json();

    tags.forEach(async tag => {
        const tagOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'token': token },
            body: JSON.stringify({
                drawId: data.newDraw.drawId,
                tagName: tag,
            }),
        };

        const responseTags = await fetch(`${backend_url}uploadDrawTags`, tagOptions);
    });

    return data;
}