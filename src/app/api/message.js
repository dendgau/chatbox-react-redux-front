import requests from './request.js';

export default {
    get: (userId, page) => requests.get('mess/get').query(userId).query(page),
    send: (userId, content) => requests.post('mess/send', { userId: userId, content: content }),
    del: messId => requests.del('mess/del', { messId: messId }),
}