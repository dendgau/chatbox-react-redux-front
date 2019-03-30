import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';
import { CHATBOX_API_ROOT } from '../configs/app.js';

const superagent = superagentPromise(_superagent, global.Promise);
const responseBody = resp => resp.body;

export default {
    del: url =>
        superagent.del(`${CHATBOX_API_ROOT}${url}`).then(responseBody),
    get: url =>
        superagent.get(`${CHATBOX_API_ROOT}${url}`).then(responseBody),
    put: (url, body) =>
        superagent.put(`${CHATBOX_API_ROOT}${url}`, body).then(responseBody),
    post: (url, body) =>
        superagent.post(`${CHATBOX_API_ROOT}${url}`, body).then(responseBody)
};