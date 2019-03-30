import requests from './request.js';

export default {
    all: () => requests.get('mock/user.json'),
}