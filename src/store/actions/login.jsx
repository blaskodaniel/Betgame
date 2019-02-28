export const Loader = (value) => {
    return {
        type: "LOADER",
        value
    }
}

export const Login = (username, password) => {
    return (dispatch, getState) => {
        // Run page loader
        dispatch(Loader(true));

        // Run async request
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(users => {
                dispatch(LoginSuccess(users));
                dispatch(Loader(false));
            }).catch(err => {
                dispatch(LoginError(err));
                dispatch(Loader(false));
            })
    }
}

export const LoginSuccess = (payload) => {
    return {
        type: 'LOGIN_SUCCESS',
        value: payload
    }
}

export const LoginError = (msg) => {
    return {
        type: 'LOGIN_ERROR',
        value: msg
    }
}

export const Logout = () => {
    return { type: 'LOGOUT' }
}
