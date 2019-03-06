import * as JWT from 'jwt-decode';

export function authChecker() {
    // return authorization header with jwt token
    let user = JSON.parse(localStorage.getItem('user'));

    if (user) {
        const decodedToken = JWT(user);
        return decodedToken;
    } else {
        return false;
    }
}