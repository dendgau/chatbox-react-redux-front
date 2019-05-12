import React, {Component} from 'react';
import {connect} from 'react-redux';
import UserItem from './UserItem.jsx';
import UserApi from '../../requests/user';
import {dispatchThunk} from '../../helpers.js';
import {CHAT_BOX_LOADED} from '../../constants/actionType.js';

const mapStateToProps = state => ({
    users: state.chatBox.users,
    currentUser: state.chatBox.currentUser
});

const mapDispatchToProps = dispatch => ({
    onLoad: (funcOnLoadDispatch) => dispatch(funcOnLoadDispatch),
});

class ListUser extends Component {
    componentWillMount() {
        this.props.onLoad(
            dispatchThunk(
                CHAT_BOX_LOADED,
                UserApi.all().then(dataUser => ({users: dataUser}))
            )
        );
    }

    render() {
        let users = this.props.users;
        let currentUser = this.props.currentUser;

        return (
            <div className={"list-user"}>
                {
                    typeof users != 'undefined' ? users.map((user, index) =>
                        <UserItem
                            key={user.id}
                            id={user.id}
                            name={user.name}
                            avatar={user.avatar}
                            isPicking={ currentUser.id == user.id ? true : false }
                        />
                    ) : ''
                }
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListUser);