import * as JWT from 'jwt-decode';

export function authChecker() {
    // return authorization header with jwt token
    let user = localStorage.getItem('user');

    if (user) {
        const decodedToken = JWT(user);
        console.log("decodedToken: "+JSON.stringify(decodedToken))
        return decodedToken;
    } else {
        return false;
    }
}