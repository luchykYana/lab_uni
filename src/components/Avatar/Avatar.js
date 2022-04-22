import {useEffect, useState} from 'react';
import {Button, Image} from 'react-bootstrap';

import {avatarService} from '../../services';
import './Avatar.css';

const Avatar = ({setUser, user}) => {
    const [avatar, setAvatar] = useState('');
    const [trigger, setTrigger] = useState();

    const getUserAvatar = () => setTrigger(new Date().setSeconds(new Date().getSeconds()));

    const choseThis = () => setUser({...user, avatar: avatar});

    useEffect(() => {
        avatarService.getAvatar().then(value => value.data.url.endsWith('.jpg' || '.png' || '.JPG' || '.jpeg') ? setAvatar(value.data.url) : getUserAvatar());
    }, [trigger]);


    return (
        <div className={'mt-5 mx-5'}>
            <div className={'size mb-2 mx-3'}><Image src={avatar} thumbnail/></div>

            <div className={'d-flex'}>
                <Button onClick={getUserAvatar} className={'mx-3'}>Change avatar</Button>
                <Button onClick={choseThis} className={'mx-1'}>Choose this photo</Button>
            </div>
        </div>
    );
};

export {Avatar};
