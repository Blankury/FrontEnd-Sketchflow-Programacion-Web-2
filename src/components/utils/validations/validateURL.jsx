export function validateURL(value, host) {

    const fccUrl = new URL(value);

    let reg = new RegExp(host);
    
    if (!reg.test(fccUrl.host)) {
        return "El host es incorrecto.\n";
    }
  
    return '';
}