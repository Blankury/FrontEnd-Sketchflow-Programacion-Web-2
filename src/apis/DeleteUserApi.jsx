import { clearLogStorage } from "../components/utils/LocalStorageUtils";
import { backend_url } from "../config";

export async function deleteUserApi(userId, isActive, token) {
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'token': token },
        body: JSON.stringify({
            userId: userId,
            isActive:  isActive,
        }),
    };

    const response = await fetch(`${backend_url}deleteUser`, options);

    return response;
}