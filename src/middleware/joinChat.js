import React from 'react';
import { connect } from 'react-redux';
import { wsConnect, wsDisconnect } from "./websocket";

class JoinChat extends React.Component {
    componentDidMount() {
            this.connectAndJoin();
    }

    connectAndJoin = () => {
        const { dispatch } = this.props;
        const host = `ws://localhost:8080/greeting`;
        dispatch(wsConnect(host))
    }

    render() {
        return (
            <div></div>
        );
    }
}

export default JoinChat;