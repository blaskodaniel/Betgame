import AppConfig from '../_helpers/application-config';
export const authService = {
    login,
    logout
};

function login(username, password) {
    return axios.post(`${AppConfig.serverUrl}/login`,{email:username,password:password})
        .then(token => {
            if(token){
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(token));

                return token;
            }
        });
}

function logout() {
    // remove token from local storage to log user out
    localStorage.removeItem('user');
}
