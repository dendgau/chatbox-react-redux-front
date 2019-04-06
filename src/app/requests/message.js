import requests from './request.js';

export default {
    get: () => requests.get('mock/message.json'),
}