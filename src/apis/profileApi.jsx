import { backend_url } from "../config";

export async function getUser(userId) {
    const options = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };

    let queryString = [
        `userId=${userId}`,
    ].join('&');

    const response = await fetch(`${backend_url}user?` + queryString, options);

    return response;
}

export async function getStatistics(userId) {
    const options = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };

    let queryString = [
        `userId=${userId}`,
    ].join('&');

    const response = await fetch(`${backend_url}userStatistics?` + queryString, options);

    return response;
}

export async function followApi(userId, followedUserId, isFollowing, token) {
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'token': token },
        body: JSON.stringify({
            userId: userId,
            followedUserId: followedUserId,
            follow: isFollowing,
        }),
    };
    console.log(userId + " " + followedUserId + " " + isFollowing);

    const response = await fetch(`${backend_url}follow`, options);

    return response;
}