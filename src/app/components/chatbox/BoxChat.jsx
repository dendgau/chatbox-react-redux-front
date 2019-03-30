import React, {Component} from 'react';
import Message from './Message.jsx'

class BoxChat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [
                {
                    level: 0,
                    content: 'content1'
                },
                {
                    level: 1,
                    content: 'content1'
                },
                {
                    level: 1,
                    content: 'content2'
                },
                {
                    level: 1,
                    content: 'content3'
                }
            ]
        }
    }

    render() {
        return (
            <div className={"box-chat"}>
                <div className={"messages"}>
                    {this.state.messages.map((m, i) => <Message key={i} content={m.content} level={m.level}/>)}
                </div>
                <div className={"chat-tool"}>
                    <form className={"tool-chat"}>
                        <textarea></textarea>
                        <input type={"submit"}/>
                    </form>
                </div>
            </div>
        );
    }
}

export default BoxChat;