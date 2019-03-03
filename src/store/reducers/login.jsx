const Login = (state = { username: 'Visitor', authentication: false, msg:"" }, action) => {
    const newState = { ...state };
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            newState.username = action.value;
            newState.authentication = true;
            return newState;
        case 'LOGIN_ERROR':
            newState.msg = action.value.message;
            newState.authentication = false;
            return newState;
        case 'LOGOUT':
            newState.username = action.username;
            newState.authentication = false;
            return newState;
        case 'LOADER':
            newState.loader = action.value;
            return newState;
        default:
            return newState
    }
}

export default Login