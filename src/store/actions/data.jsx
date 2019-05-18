import axios from 'axios';
import {AppConfig} from '../../_helpers/application-config';
import {Loader} from './loader';

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
        type: 'GETMATCHES_SUCCESS',
        value: payload
    }
}
export const GetMatchesError = (msg) => {
    return {
        type: 'GETMATCHES_SUCCESS',
        value: msg
    }
}