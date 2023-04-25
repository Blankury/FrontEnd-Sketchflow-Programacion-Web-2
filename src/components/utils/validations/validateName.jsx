export function validateName(value) {
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
  
    if (/\d/g.test(value)) {
        return "El texto no puede tener números\n";
    }
  
    if (/[^a-zA-ZÀ-ÿ\u00f1\u00d1\s\d<\0]/g.test(value)) {
        return "El texto no puede tener caracteres especiales\n";
    }
  //
    //if (/^[A-ZÁÉÍÓÚÑ](?:[a-záéíóúñ]|\b[,.'-]\b)+(?: [A-ZÁÉÍÓÚÑ](?:[a-záéíóúñ]|\b[,.'-]\b)+)*$/g.test(value)) {
    //  return "Todo nombre propio debe iniciar con una mayúscula\n";
    //}
  
    return '';
}