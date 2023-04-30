import { validateNotNull } from "./validations/validateNotNull";

export async function validateLogIn() {
    let varUserName = document.getElementById('formUserName');
    let varPassword = document.getElementById('formPassword');
    
    varUserName.setCustomValidity(validateNotNull(varUserName.value));
    varPassword.setCustomValidity(validateNotNull(varPassword.value));
}