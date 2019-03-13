import axios from 'axios';
import {AppConfig} from '../../_helpers/application-config';

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

        axios.post(`${AppConfig.serverUrl}/login`,{email:username,password:password})
            .then(token => {
                if(token){
                    localStorage.setItem('user', token.data.token);
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

export const Registration = (email, password, name) => {
    return (dispatch, getState) => {
        // Run page loader
        dispatch(Loader(true));

        axios.post(`${AppConfig.serverUrl}/register`,{email:email,password:password,name:name})
            .then(data => {
                dispatch(Login(email,password));
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

export const RegisterSuccess = (payload) => {
    return {
        type: 'REGISTER_SUCCESS',
        value: payload
    }
}

export const RegisterError = (msg) => {
    return {
        type: 'REGISTER_ERROR',
        value: msg
    }
}