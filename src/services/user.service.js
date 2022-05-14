import {axiosUserService} from './axios.service';
import {urls} from '../configs';

export const userService = {
    create: (user) => axiosUserService.post(urls.users, user).then(value => value.data),
    getAll: () => axiosUserService.get(urls.users),
    deleteById: (id) => axiosUserService.delete(`${urls.users}/${id}`)
}
