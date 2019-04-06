import React, {Component} from 'react';
import {connect} from 'react-redux';
import Message from './Message.jsx'
import {dispatchThunk} from '../../helpers.js';
import {GET_MESSAGE} from '../../constants/actionType.js';
import MessageApi from '../../requests/message.js';

const mapStateToProps = state => {
    console.log(state);
    let props = {};
    if (typeof state.chatBox == 'undefined') {
        return props;
    }

    let chatBoxData = state.chatBox;
    if (typeof chatBoxData.currentUserId != 'undefined') {
        props.currentUserId = chatBoxData.currentUserId;
        if (typeof chatBoxData.messages != 'undefined') {
            props.messages = chatBoxData.messages[props.currentUserId];
        }
    }

    return props;
}

const mapDispatchToProps = dispatch => ({
    getMessage: (funcGetMessageDispatch) => dispatch(funcGetMessageDispatch)
})

class BoxChat extends Component {
    componentWillReceiveProps(nextProps) {
        if (nextProps.currentUserId != this.props.currentUserId) {
            this.props.getMessage(
                dispatchThunk(
                    GET_MESSAGE,
                    MessageApi.get().then((data) => {
                        return {messages: data}
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
                    {messages.map((m, i) => <Message key={i} content={m.content} level={m.level}/>)}
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

export default connect(mapStateToProps, mapDispatchToProps)(BoxChat);