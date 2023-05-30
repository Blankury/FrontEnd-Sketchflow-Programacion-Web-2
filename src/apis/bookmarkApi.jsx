import { backend_url } from "../config";

export async function setBookmarkApi( userId, drawId, bookmark, token ) {
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'token': token },
        body: JSON.stringify({
            userId: userId,
            drawId: drawId,
            bookmark: !bookmark,
        }),
    };
    const response = await fetch(`${backend_url}bookmark`, options);

    return response;
}

export async function getBookmarkApi( userId, drawId, token ) {
    const options = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'token': token },
    };

    let queryString = [
        `userId=${userId}`,
        `drawId=${drawId}`,
    ].join('&');

    const response = await fetch(`${backend_url}getBookmark?` + queryString, options);

    return response;
}