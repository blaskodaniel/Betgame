import { authChecker } from '../../_helpers/auth-checker';

var defaultAuthState = { username: 'Visitor', role: 'visitor', email: null, authentication: false, msg: null };
const userToken = authChecker();
if (userToken) {
    defaultAuthState = {
        username: userToken.username,
        role: userToken.role,
        email: userToken.email,
        authentication: true,
        msg: null
    };
}

const Login = (state = defaultAuthState, action) => {
    const newState = { ...state };
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            newState.username = userToken.username;
            newState.role = userToken.role;
            newState.email = userToken.email;
            newState.authentication = true;
            newState.msg = null;
            return newState;
        case 'LOGIN_ERROR':
            newState.msg = action.value.message;
            return newState;
        case 'LOGOUT':
            return newState;
        case 'LOADER':
            newState.loader = action.value;
            return newState;
        default:
            return newState
    }
}

export default Login