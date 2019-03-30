import React from 'react';

const Message = ({content, level}) => {
    return (
        <div className={"m-item"}>
            <div className={"m-level" + level}>
                {content}
            </div>
        </div>
    );
};

export default Message;