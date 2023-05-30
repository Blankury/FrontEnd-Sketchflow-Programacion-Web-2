import { validateCheck } from "./validations/validateCheck";
import { validateTitle } from "./validations/validateTitle";

export async function validateUpdateDraw() {
    let varTitle = document.getElementById('formTitle');
    //let varDescription = document.getElementById('formDescription');
    let varRestrict18 = document.getElementById('formRestrict18');
    let varSelectedRestrict18 = document.querySelectorAll('input[id="formRestrict18"]:checked');
    let varIsPublic = document.getElementById('formIsPublic');
    let varSelectedIsPublic = document.querySelectorAll('input[id="formIsPublic"]:checked');

    varTitle.setCustomValidity(validateTitle(varTitle.value));
    varRestrict18.setCustomValidity(validateCheck(varSelectedRestrict18[0]));
    varIsPublic.setCustomValidity(validateCheck(varSelectedIsPublic[0]));

}