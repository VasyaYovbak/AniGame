import * as cookie from "../cookieService.mjs";
function logout(){
    fetch('http://127.0.0.1:2012/logout', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${cookie.getAuthToken()}`
        },
        method: "POST"
    }).then(response => response.json()).then(data => {
        cookie.clearCookie('access_token');
        window.location.replace('/AniGame/login.html');
    });
}
document.querySelector('.nav-elements').querySelector('#logout').addEventListener('click',logout);
