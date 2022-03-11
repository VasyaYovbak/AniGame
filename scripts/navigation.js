import * as cookie from "./cookieService.mjs"

if(cookie.getAuthToken()===null){
    document.querySelector('#logout').setAttribute('hidden',true);
}else{
    document.querySelector('#login').setAttribute('hidden',true);
}