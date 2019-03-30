import {
    CHAT_BOX_LOADED,
    SEND_MESSAGE
} from '../constants/actionType.js';

export default (state = [], action) => {
    switch (action.type) {
        case CHAT_BOX_LOADED:
            return {
                ...state,
                users: action.payload.users,
            }
        case SEND_MESSAGE:
        default:
            return {
                ...state
            }
    }
};