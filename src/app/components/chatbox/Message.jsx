import React from 'react';

const Message = ({content, level, avatar}) => {
    return (
        <div className={"m-item"}>
            <div className={"m-level" + level}>
                <MessageAvatar level={level} avatar={avatar}/>
                <MessageContent content={content}/>
            </div>
        </div>
    );
};

const MessageAvatar = ({level, avatar}) => {
    if (level == 0) {
        return '';
    }

    let hireAvatar = (avatar == '') ? 'hide-avatar' : '';
    return (
        <div className={"m-avatar"}>
            <img className={hireAvatar} src={avatar}/>
        </div>
    )
}

const MessageContent = ({content}) => {
    return (
        <div className={"m-content"}>
            { content }
        </div>
    )
}

export default Message;