export function validateUsername(value) {
    if (value === "") {
        return "Completa este campo";
    }
  
    if(value.length < 3){
        return "El nombre es demasiado corto";
    }

    if (/(\s{1,})/g.test(value)) {
        return "El texto no puede tener espacios\n";
    }
  
    if (/\d/g.test(value)) {
        return "El texto no puede tener números\n";
    }
  
    if (/[^a-zA-ZÀ-ÿ\u00f1\u00d1\s\d<\0]/g.test(value)) {
        return "El texto no puede tener caracteres especiales\n";
    }
  
    return '';
}