import {urls} from '../configs';

const axios = require('axios');

const axiosUserService = axios.create({
    baseURL: urls.baseURL
});

const axiosAvatarService = axios.create({
    baseURL: urls.avatarUrl
});

export {axiosAvatarService, axiosUserService};
