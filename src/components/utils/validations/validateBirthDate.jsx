export function validateBirthdate(value){
    var ToDate = new Date();

    if(value === ""){
        return "Completa este campo\n"
    }

    if (new Date(value).getTime() >= ToDate.getTime()){
        return "Selecciona una fecha correcta";
    }

    return '';
}