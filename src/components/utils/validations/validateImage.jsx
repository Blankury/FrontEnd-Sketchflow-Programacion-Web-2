export function validateImage(value, text){
    if(value === "") {
        return "Agrega una imagen" + text + "\n";
    }

    let idxDot = value.lastIndexOf(".") + 1;
    let extFile = value.substr(idxDot, value.length).toLowerCase();
    if (extFile === "jpg" || extFile === "jpeg" || extFile === "png" || extFile === "gif"){
        return '';
    }else{
        return "Solo se permiten archivos jpg/jpeg, gif y png"; 
    }
}