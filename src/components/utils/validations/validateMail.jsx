export function validateMail(value){
    if(value === "") {
        return "Completa este campo\n"
    }
  
    if(!/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/g.test(value)) {
        return "El correo electrónico debe tener un formato válido\n"
    }
  
    if(/(\s)/g.test(value)) {
        return "El texto no puede tener espacios\n"
    }
  
    return "";
}