import { validateNotNull } from "./validations/validateNotNull";

export async function validateArtworkComment() {
    let varComment = document.getElementById('formComment');

    varComment.setCustomValidity(validateNotNull(varComment.value));
}