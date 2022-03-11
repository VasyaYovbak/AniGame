import * as cookie from "../cookieService.mjs";


function registration() {
    const form = document.querySelector('.registration-form');
    const email = form.querySelector('#email').value;
    const password = form.querySelector('#password').value;
    const confirm_password = form.querySelector('#confirm-password').value;
    const username = form.querySelector('#username').value;
    const new_user = {
        username, email, password
    };
    if (password !== confirm_password) {
        alert("Passwords do not match");
        return
    }
    fetch('http://127.0.0.1:2012/registration', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(new_user)
    }).then(response => {
        if(response.status===200){
            return response.json();
        }
        throw response.status;
    }).then(data => {
        cookie.setCookie('access_token', data['access_token'], 60);
        window.location.replace('/AniGame/index.html');
    }).catch((error)=>{
        if(error === 409){
            alert('User with this email or username already registered');
        }
    });

}
if(cookie.getAuthToken()!==null){
    window.location.replace('/AniGame/index.html');
}
document.querySelector('.registration-form').querySelector(".btn").addEventListener('click', registration);

