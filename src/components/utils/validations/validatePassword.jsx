export function validatePassword(value){  
    if(value === ""){
        return "Completa este campo\n"
    }
  
    if(value.length < 8){
        return "La contraseña es demasiado corta";
    }

    // if(!/^(?=(?:.*[A-Z]){1})(?=(?:.*[a-z]){1})(?=(?:.*[0-9]){1})(?=(?:.*[.,\/#!$%\^&\*;:{}=\-_`~()”“…]){1})\S{8,}/g.test(value)){ 
    if(!/(?=(?:.*[A-Z]){1})/g.test(value)){
        return "Debe contener al menos una letra mayúscula\n"
    }
    if(!/(?=(?:.*[a-z]){1})/g.test(value)){
        return "Debe contener al menos una letra minúscula\n"
    }
    if(!/(?=(?:.*[0-9]){1})/g.test(value)){
        return "Debe contener al menos un número";
    }
    if(!/(?=(?:.*[.,\/#!$%\^&\*;:{}=\-_`~()”“…]){1})/g.test(value)){
        return "Debe contener al menos un signo de puntuación";
    }
    if(/(\s)/g.test(value)){
        return "El texto no puede tener espacios";
    }
  
    return '';
}