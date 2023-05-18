import { backend_url } from "../config";
import { loadImage } from "./LoadImageApi";
import { tagsApi } from "./TagApi";

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

    await tagsApi(tags, data.newDraw.drawId, token);

    //tags.forEach(async tag => {
    //    const tagOptions = {
    //        method: 'POST',
    //        headers: { 'Content-Type': 'application/json', 'token': token },
    //        body: JSON.stringify({
    //            drawId: data.newDraw.drawId,
    //            tagName: tag,
    //        }),
    //    };
//
    //    const responseTags = await fetch(`${backend_url}uploadDrawTags`, tagOptions);
    //});

    return data;
}

export async function mostRecentDrawsApi( userId, token ) {
    const options = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'token': token },
    };

    let queryString = [
        `userId=${userId}`,
        `limit=${20}`,
        `orderBy=${'desc'}`,
    ].join('&');

    const response = await fetch(`${backend_url}draws?` + queryString, options);

    return response;
}

export async function getDrawApi( userId, drawId, token ) {
    const options = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'token': token },
    };

    let queryString = [
        `userId=${userId}`,
        `drawId=${drawId}`,
    ].join('&');

    const response = await fetch(`${backend_url}draw?` + queryString, options);

    return response;
}

export async function otherDrawingsApi( userId, filterUSerId, limit, token ) {
    const options = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'token': token },
    };

    let queryString = [
        `userId=${userId}`,
        `filterUSerId=${filterUSerId}`,
        `limit=${limit}`,
        `orderBy=${"desc"}`,
    ].join('&');

    const response = await fetch(`${backend_url}draws?` + queryString, options);

    return response;
}

export async function bookmarksApi( userId, filterUSerId, limit, token ) {
    const options = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'token': token },
    };

    let queryString = [
        `userId=${userId}`,
        `filterUSerId=${filterUSerId}`,
        `limit=${limit}`,
        `orderBy=${"desc"}`,
    ].join('&');

    const response = await fetch(`${backend_url}bookmarks?` + queryString, options);

    return response;
}