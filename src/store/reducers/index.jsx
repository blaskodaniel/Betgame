import { combineReducers } from 'redux'
import {Login} from './authentication';
import {GetMatches} from './data';

export default combineReducers({
  Login,
  GetMatches
})