import React, { Component } from 'react'
import ChatInput from './ChatInput'
import ChatMessage from './ChatMessage'

const URL = 'ws://localhost:8080/greetings';

class Chat extends Component {
    state = {
        messages: []
    };

    ws = new WebSocket(URL);

    componentDidMount() {
        this.ws.onopen = () => {
            console.log('connected')
        };

        this.ws.onmessage = evt => {
            const message = JSON.parse(evt.data);
            this.addMessage(message)
        }

        this.ws.onclose = () => {
            console.log('disconnected');
            this.setState({
                ws: new WebSocket(URL),
            })
        }
    }

    addMessage = message =>
        this.setState(state => ({ messages: [message, ...state.messages] }));

    submitMessage = messageString => {
        const message = { content: messageString };
        this.ws.send(JSON.stringify(message));
        console.log(message);
        // this.addMessage(message);
    };

    render() {
        return (
            <div>
                <ChatInput
                    ws={this.ws}
                    onSubmitMessage={messageString => this.submitMessage(messageString)}
                />
                {this.state.messages.map((message, index) =>
                    <ChatMessage
                        key={index}
                        content={message.content}
                    />,
                )}
            </div>
        )
    }
}

export default Chat;