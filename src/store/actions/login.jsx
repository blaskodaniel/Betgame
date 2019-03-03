import axios from 'axios';

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

        axios.post("http://mokasfoci.hu/login",{email:username,password:password})
            .then(token => {
                if(token){
                    dispatch(LoginSuccess(token));
                }else{
                    dispatch(LoginError("Authentication failed!"));
                }
                
                dispatch(Loader(false));
            }).catch(err => {
                if(err.response){
                    dispatch(LoginError(err.response.data));
                }else{
                    dispatch(LoginError(err.message));
                }
                
                dispatch(Loader(false));
            });
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
