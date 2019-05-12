import requests from './request.js';

export default {
    get: (userId) => requests.get('mock/message'+userId+'.json'),
}