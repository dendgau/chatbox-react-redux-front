import React, {Component} from 'react';
import { connect } from 'react-redux';
import UserItem from './UserItem.jsx';
import UserApi from '../../requests/user';
import { CHAT_BOX_LOADED } from '../../constants/actionType.js';
import { dispatchThunk } from '../../helpers.js';

const mapStateToProps = state => state.chatBox;

const mapDispatchToProps = dispatch => ({
    onLoad: (funcDispatch) => dispatch(funcDispatch)
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
        return (
            <div className={"list-user"}>
                { typeof users != 'undefined' ? users.map((user, index) => <UserItem key={index} name={user.name} />) : '' }
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (ListUser);