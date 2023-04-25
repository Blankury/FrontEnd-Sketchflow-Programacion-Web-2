import { validateName } from "./validations/validateName";
import { validateMail } from "./validations/validateMail";
import { validateUsername } from "./validations/validateUserName";
import { validatePassword } from "./validations/validatePassword";
import { validateCheckGender } from "./validations/validateCheckGender";
import { validateBirthdate } from "./validations/validateBirthDate";
import { validateImage } from "./validations/validateImage";
import { validateExistentMail } from "./validations/validateExistentMail";
import { validateExistentUserName } from "./validations/validateExistentUserName";

export async function validateSignUp() {
    let varName = document.getElementById('formName');
    let varMail = document.getElementById('formMail');
    let varUserName = document.getElementById('formUserName');
    let varPassword = document.getElementById('formPassword');
    let varGender = document.getElementById('formGender');
    let varSelectedGender = document.querySelectorAll('input[id="formGender"]:checked');
    let varBirthDate = document.getElementById('formBirthDate');
    let varProfileImage = document.getElementById('profile-picture');
    let varCoverImage = document.getElementById('cover-picture');

    //varProfileImage.setCustomValidity(validateImage(varProfileImage.value));
    //varCoverImage.setCustomValidity(validateImage(varCoverImage.value));
    let sharedValidation = validateImage(varProfileImage.value, "de perfil");
    if(sharedValidation === ""){
        sharedValidation = validateImage(varCoverImage.value, "de portada");
    }
    if(sharedValidation === ""){
        sharedValidation = validateName(varName.value);
    }
    varName.setCustomValidity(sharedValidation);
    //varName.setCustomValidity(validateName(varName.value));


    sharedValidation = validateMail(varMail.value);
    if(sharedValidation === ""){
        sharedValidation = await validateExistentMail(varMail.value);
    }
    varMail.setCustomValidity(sharedValidation);


    sharedValidation = validateUsername(varUserName.value)
    if(sharedValidation === ""){
        sharedValidation = await validateExistentUserName(varUserName.value)
    }
    varUserName.setCustomValidity(sharedValidation);

    varPassword.setCustomValidity(validatePassword(varPassword.value));
    varGender.setCustomValidity(validateCheckGender(varSelectedGender[0]));
    varBirthDate.setCustomValidity(validateBirthdate(varBirthDate.value));
}