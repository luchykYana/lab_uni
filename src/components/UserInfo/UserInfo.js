import {useSelector} from 'react-redux';
import {User} from '../User/User';

const UserInfo = () => {
    const {users} = useSelector(state => state['userReducer']);

    return (
        <div>
            <div className={'d-flex'}>
                {users.map(user => <User user={user} key={user.id}/>)}
            </div>
        </div>
    );
};

export {UserInfo};
