import {
    CHAT_BOX_LOADED,
    SEND_MESSAGE,
    GET_MESSAGE,
    PICK_USER_CHAT
} from '../constants/actionType.js';

export default (state = [], action) => {
    switch (action.type) {
        case CHAT_BOX_LOADED:
            return {
                ...state,
                users: action.payload.users ? action.payload.users : [],
                currentUser: action.payload.users ? action.payload.users[0] : null
            }
        case PICK_USER_CHAT:
            return {
                ...state,
                currentUser: action.payload.userInfo
            }
        case GET_MESSAGE:
            return {
                ...state,
                messages: action.payload.messages
            }
        case SEND_MESSAGE:
            return {
                ...state,
                messages: action.payload.messages
            }
        default:
            return {
                ...state
            }
    }
};