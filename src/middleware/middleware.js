import * as actions from './websocket';

const middleware = () => {
    let socket = null;

    const onOpen = store => (event) => {
        console.log("websocket open", event.target.url);
        store.dispatch(actions.wsConnected(event.target.url));
    };

    const onCLose = store => () => {
        store.dispatch(actions.wsDisconnected());
    };

    const onMessage = store => (event) => {
        const payload = JSON.parse(event.data);
        console.log('receiving server message');
    };

    return store => next => action => {
        switch (action.type) {
            case 'WS_CONNECT':
                if (socket !== null) {
                    socket.close();
                }
                socket = new WebSocket("ws://localhost:8080/greetings");
                socket.onmessage = onMessage(store);
                socket.onclose = onCLose(store);
                socket.onopen = onOpen(store);
                break;
            case 'WS_DISCONNECT':
                if (socket !== null) {
                    socket.close();
                }
                socket = null;
                console.log('websocket closed');
                break;
            case 'NEW_MESSAGE':
                console.log('sending a message', action.msg);
                socket.send(JSON.stringify({ content: action.msg }));
                break;
            default:
                console.log('the next action', action);
                return next(action);
        }
    };
};

export default middleware();