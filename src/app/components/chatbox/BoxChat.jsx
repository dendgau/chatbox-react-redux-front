import React, {Component} from 'react';
import {connect} from 'react-redux';
import Message from './Message.jsx'
import {dispatchThunk} from '../../helpers.js';
import {
    GET_MESSAGE,
    SEND_MESSAGE
} from '../../constants/actionType.js';
import MessageApi from '../../requests/message.js';

const mapStateToProps = state => {
    let props = {};
    if (typeof state.chatBox == 'undefined') {
        return props;
    }

    let chatBoxData = state.chatBox;
    if (typeof chatBoxData.currentUser != 'undefined' && chatBoxData.currentUser != null) {
        props.currentUser = chatBoxData.currentUser;
        if (typeof chatBoxData.messages != 'undefined') {
            props.messages = chatBoxData.messages;
        }
    }
    return props;
}

const mapDispatchToProps = dispatch => ({
    getMessage: (funcGetMessageDispatch) => dispatch(funcGetMessageDispatch),
    sendMessage: (dataSendMessage) => dispatch(dataSendMessage)
})

class BoxChat extends Component {
    handleSubmitMessage(e) {
        let newMessage = e.target.content.value;
        let messages = this.props.messages.slice(0);
        e.target.content.value = "";

        // Send dispatch
        messages.push({
            level: 0,
            content: newMessage
        });
        this.props.sendMessage({
            type: SEND_MESSAGE,
            payload: {
                messages: messages
            }
        });

        e.preventDefault();
        e.stopPropagation();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.currentUser != this.props.currentUser) {
            this.props.getMessage(
                dispatchThunk(
                    GET_MESSAGE,
                    MessageApi.get(nextProps.currentUser.id).then((data) => {
                        return {messages: data}
                    }, (error) => {
                        return {messages: []}
                    })
                )
            );
        }
    }

    render() {
        let messages = this.props.messages ? this.props.messages : [];
        return (
            <div className={"box-chat"}>
                <div className={"messages"}>
                    {
                        messages.map((m, i) => {
                            let avatar = '';
                            let preItem = messages[i - 1] ? messages[i - 1] : null;
                            if (m.level == 1 && (preItem == null || preItem.level != m.level)) {
                                avatar = this.props.currentUser.avatar;
                            }

                            return <Message
                                key={i}
                                content={m.content}
                                level={m.level}
                                avatar={avatar}
                            />
                        })
                    }
                </div>
                <div className={"chat-tool"}>
                    <form className={"tool-chat"} onSubmit={e => this.handleSubmitMessage(e)}>
                        <textarea placeholder={"Nhập tin nhắn..."} name={"content"}></textarea>
                        <input type={"submit"} value={"Gửi tin nhắn"}/>
                    </form>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BoxChat);