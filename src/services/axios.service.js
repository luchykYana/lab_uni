import {urls} from '../configs';

const axios = require('axios');

const axiosAvatarService = axios.create({
    baseURL: urls.avatarUrl
});

export default axiosAvatarService;
