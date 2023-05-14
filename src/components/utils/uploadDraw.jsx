import { validateCheck } from "./validations/validateCheck";
import { validateTitle } from "./validations/validateTitle";
import { validateImage } from "./validations/validateImage";

export async function validateUploadDraw() {
    let varDraw = document.getElementById('formDraw');
    let varTitle = document.getElementById('formTitle');
    //let varDescription = document.getElementById('formDescription');
    let varRestrict18 = document.getElementById('formRestrict18');
    let varSelectedRestrict18 = document.querySelectorAll('input[id="formRestrict18"]:checked');
    let varIsPublic = document.getElementById('formIsPublic');
    let varSelectedIsPublic = document.querySelectorAll('input[id="formIsPublic"]:checked');

    let sharedValidation = validateImage(varDraw.value, "para publicar.");
    if(sharedValidation === ""){
        sharedValidation = validateTitle(varTitle.value);
    }
    varTitle.setCustomValidity(sharedValidation);
    
    varRestrict18.setCustomValidity(validateCheck(varSelectedRestrict18[0]));
    varIsPublic.setCustomValidity(validateCheck(varSelectedIsPublic[0]));

}