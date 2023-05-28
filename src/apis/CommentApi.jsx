import { backend_url } from "../config";

export async function commentApi( userId, drawId, comment, token ) {
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'token': token },
        body: JSON.stringify({
            userId: userId,
            drawId: drawId,
            comment: comment,
        }),
    };

    const response = await fetch(`${backend_url}comment`, options);

    return response;
}

export async function deleteCommentApi( userId, drawId, commentId, token ) {
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'token': token },
        body: JSON.stringify({
            userId: userId,
            drawId: drawId,
            commentId: commentId,
        }),
    };

    const response = await fetch(`${backend_url}deleteComment`, options);

    return response;
}

export async function commentsApi( userId, drawId, limit, token ) {
    const options = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'token': token },
    };
    let queryString = [
        `userId=${userId}`,
        `drawId=${drawId}`,
        `limit=${limit}`,
        `orderBy=${'desc'}`,
    ].join('&');

    const response = await fetch(`${backend_url}comments?` + queryString, options);

    return response;
}