import * as cookie from "../cookieService.mjs";

function login() {
    const form = document.querySelector('.login-form');
    const email = form.querySelector('#email').value;
    const password = form.querySelector('#password').value;

    const user = {
        email, password
    };

    fetch('http://127.0.0.1:2012/login', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(user)
    }).then(response => {
        if (response.status === 200) {
            return response.json();
        }
        throw response.status;
    }).then(data => {
        cookie.setCookie('access_token', data['access_token'], 60);
        window.location.replace('/AniGame/index.html');
    }).catch((error) => {
        if (error === 403) {
            alert("Wrong password or user with this email doesn't exist");
        }
    });
}

if (cookie.getAuthToken() !== null) {
    window.location.replace('/AniGame/index.html');
}
document.querySelector('.login-form').querySelector(".btn").addEventListener('click', login);