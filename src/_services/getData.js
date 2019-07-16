import axios from 'axios';
import {AppConfig} from '../_helpers/application-config';
import {tokenHeader} from '../_helpers/token-header';

export const loadProfile = (userid) => {
    return axios.get(`${AppConfig.serverUrl}/api/getuserbyid/${userid}`,{ headers: tokenHeader() })
        .then(data => {
            if(data){
                return data;
            }
        });
}