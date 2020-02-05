const websocketInitialState = {};

export const websocketReducer = (state = { ...websocketInitialState }, action) => {
    switch (action.type) {
        case 'WS_CONNECT':
            return { ...state, host: action.host };
        default:
            return state;
    }
};