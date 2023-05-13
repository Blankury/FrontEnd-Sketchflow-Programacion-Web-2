export function validateTitle(value) {
    if (value === "") {
        return "Completa este campo";
    }
  
    if(value.length < 3){
        return "El nombre es demasiado corto";
    }

    if (/^(\s+)/g.test(value)) {
        return "El texto no puede tener ningun espacio al inicio\n";
    }
  
    if (/(\s{2,})/g.test(value)) {
        return "El texto no puede tener mas de un espacio entre palabras\n";
    }
  
    if (/(\s+)$/g.test(value)) {
        return "El texto no puede tener ningun espacio al final\n";
    }
  
    return '';
}