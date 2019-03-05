import Config from '../application.config';
export const authService = {
    login,
    logout
};

function login(username, password) {
    return axios.post(`${Config.serverUrl}/login`,{email:username,password:password})
        .then(token => {
            if(token){
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(token));

                return token;
            }
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}
