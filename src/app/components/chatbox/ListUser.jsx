import React, {Component} from 'react';
import { connect } from 'react-redux';
import UserItem from './UserItem.jsx';
import { CHAT_BOX_LOADED } from '../../constants/actionType.js'
import UserApi from '../../api/user';

// const mapStateToProps = state => state.chatBox;

const mapStateToProps = state => {
    console.log(state);
    return state.chatBox;
}

const mapDispatchToProps = dispatch => ({
    onLoad: (func) => dispatch(func)
});

class ListUser extends Component {
    componentWillMount() {
        let funcDispatch = dispatch => {
            dispatch({
                type: CHAT_BOX_LOADED,
                payload: { users: [] }
            });
            UserApi.all().then((resp) => {
                setTimeout(() => {
                    dispatch({
                        type: CHAT_BOX_LOADED,
                        payload: { users: resp },
                    })
                }, 1000)
            }).catch((err) => console.log('err:', err))
        }

        this.props.onLoad(funcDispatch);
    }
    render() {
        const users = this.props.users;
        return (
            <div className={"list-user"}>
                { typeof users != 'undefined' ? users.map((user, index) => <UserItem key={index} name={user.name} />) : '' }
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (ListUser);