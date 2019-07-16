import axios from 'axios';
import {AppConfig} from '../../_helpers/application-config';
import {Loader} from './loader';
import * as actionTypes from './actionTypes';

export const GetMatches = (query) => {
    return (dispatch, getState) => {
        // Run page loader
        dispatch(Loader(true));

        axios.get(`${AppConfig.serverUrl}/getmatches${query}`)
            .then(data => {
                if(data){
                    dispatch(GetMatchesSuccess(data));
                }else{
                    dispatch(GetMatchesError("Error during download matches"));
                }
                
                dispatch(Loader(false));
            }).catch(err => {
                if(err.response){
                    dispatch(GetMatchesError(err.response.data));
                }else{
                    dispatch(GetMatchesError(err.message));
                }
                
                dispatch(Loader(false));
            });
    }
}

export const GetMatchesSuccess = (payload) => {
    return {
        type: actionTypes.GETMATCHES_SUCCESS,
        value: payload
    }
}
export const GetMatchesError = (msg) => {
    return {
        type: actionTypes.GETMATCHES_ERROR,
        value: msg
    }
}

export const loadUserProfile = (userid) => {
    return (dispatch) => {
        // Run page loader
        dispatch(Loader(true));

        axios.get(`${AppConfig.serverUrl}/api/getuserbyid/${userid}`)
            .then(data => {
                if(data){
                    dispatch(loadUserProfileSuccess(data));
                }else{
                    dispatch(loadUserProfileError("Error during download loadUserProfile"));
                }
                
                dispatch(Loader(false));
            }).catch(err => {
                if(err.response){
                    dispatch(loadUserProfileError(err.response.data));
                }else{
                    dispatch(loadUserProfileError(err.message));
                }
                
                dispatch(Loader(false));
            });
    }
}

export const loadUserProfileSuccess = (payload) => {
    return {
        type: actionTypes.LOADPROFILE_SUCCESS,
        value: payload
    }
}
export const loadUserProfileError = (msg) => {
    return {
        type: actionTypes.LOADPROFILE_ERROR,
        value: msg
    }
}