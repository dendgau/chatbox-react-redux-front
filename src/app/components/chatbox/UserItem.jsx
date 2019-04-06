import React, {Component} from 'react';
import {connect} from 'react-redux';
import {PICK_USER_CHAT} from "../../constants/actionType";

const mapDispatchToProps = dispatch => ({
    onSelect: (userId) => dispatch({
        type: PICK_USER_CHAT,
        payload: {userId: userId}
    }),
});

class UserItem extends Component {
    onSelectUser(e) {
        let userId = this.props.id;
        this.props.onSelect(userId);
    }

    render() {
        let classIsPicking = this.props.isPicking ? 'user-picked' : '';

        return (
            <div className={['user-item', classIsPicking].join(' ')} onClick={(e) => this.onSelectUser(e)}>
                <div className={"avatar"}>
                    <img src={"./assets/img/nobody.jpg"}/>
                </div>
                <div className={"content"}>
                    <div className={"name"}>
                        {this.props.name}
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(UserItem);