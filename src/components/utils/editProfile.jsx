import { validateName } from "./validations/validateName";
import { validatePassword } from "./validations/validatePassword";
import { validateCheckGender } from "./validations/validateCheckGender";
import { validateURL } from "./validations/validateURL";

export async function validateEditProfile() {
    let varName = document.getElementById('formName');
    let varPassword = document.getElementById('formPassword');
    let varGender = document.getElementById('formGender');
    let varFacebook = document.getElementById('formFacebookLink');
    let varTwitter = document.getElementById('formTwitterLink');
    let varPaypal = document.getElementById('formPaypalLink');

    varName.setCustomValidity(validateName(varName.value));
    if(varPassword.value !== ""){
        varPassword.setCustomValidity(validatePassword(varPassword.value));
    }
    varGender.setCustomValidity(validateCheckGender(varGender.value));
    varFacebook.setCustomValidity(validateURL(varFacebook.value, "facebook"));
    varTwitter.setCustomValidity(validateURL(varTwitter.value, "twitter"));
    varPaypal.setCustomValidity(validateURL(varPaypal.value, "paypal"));
}