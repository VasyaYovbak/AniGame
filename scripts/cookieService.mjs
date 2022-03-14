
function setCookie(name, value, minutes) {
    let expires = '';
    if (minutes) {
        let date = new Date();
        date.setTime(date.getTime() + minutes * 60 * 1000);
        expires = '; expires=' + date.toUTCString();
    }
    document.cookie = name + '=' + (value || '') + expires + '; path=/';
}

function getCookie(name) {
    let nameEQ = name + '=';
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function clearCookie(name) {
    let date = new Date();
    date.setTime(date.getTime() + 1);
    let expires = '; expires=' + date.toUTCString();
    document.cookie = name + '=' + '' + expires + '; path=/';
}

function getAuthToken() {
    return getCookie('access_token');
}

export {setCookie,getCookie,getAuthToken,clearCookie};