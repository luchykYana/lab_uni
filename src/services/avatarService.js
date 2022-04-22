import axiosAvatarService from './axios.service';

export const avatarService = {
    getAvatar: () => axiosAvatarService.get('')
};
