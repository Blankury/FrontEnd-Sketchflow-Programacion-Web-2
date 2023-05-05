export function setLogInStorage(user){
    localStorage.clear();
    
    localStorage.setItem("userId", user.userId);
    localStorage.setItem("token", user.token);
}

export function clearLogStorage(){
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
    localStorage.clear();
}