import React, {Component} from 'react';
import {connect} from 'react-redux';
import {PICK_USER_CHAT} from "../../constants/actionType";

const mapDispatchToProps = dispatch => ({
    onSelect: (userInfo) => dispatch({
        type: PICK_USER_CHAT,
        payload: {userInfo: userInfo}
    }),
});

class UserItem extends Component {
    onSelectUser(e) {
        this.props.onSelect({
            id: this.props.id,
            name: this.props.name,
            avatar: this.props.avatar,
        });
    }

    render() {
        let classIsPicking = this.props.isPicking ? 'user-picked' : '';

        return (
            <div className={['user-item', classIsPicking].join(' ')} onClick={(e) => this.onSelectUser(e)}>
                <div className={"avatar"}>
                    <img src={this.props.avatar}/>
                </div>
                <div className={"content"}>
                    <p className={"name"}>
                        {this.props.name}
                    </p>
                </div>
            </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(UserItem);