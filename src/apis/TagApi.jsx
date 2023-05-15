import { backend_url } from "../config";

export async function tagsApi( tags, drawId, token ) {
    tags.forEach(async tag => {
        const tagOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'token': token },
            body: JSON.stringify({
                drawId: drawId,
                tagName: tag,
            }),
        };

        const responseTags = await fetch(`${backend_url}uploadDrawTags`, tagOptions);
    });
}

export async function popularTagsApi( userId, token ) {
    const options = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'token': token },
    };

    let queryString = [
        `userId=${userId}`,
        `limit=${20}`,
        `orderBy=${'desc'}`,
    ].join('&');

    const response = await fetch(`${backend_url}tags?` + queryString, options);

    return response;
}