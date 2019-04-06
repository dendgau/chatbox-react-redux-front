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
            }
        case PICK_USER_CHAT:
            return {
                ...state,
                currentUserId: action.payload.userId
            }
        case GET_MESSAGE:
            return {
                ...state,
                messages: {
                    1: action.payload.messages ? action.payload.messages : []
                }
            }
        case SEND_MESSAGE:
        default:
            return {
                ...state
            }
    }
};