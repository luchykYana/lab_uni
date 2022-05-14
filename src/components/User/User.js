import {Button, Card} from 'react-bootstrap';
import {useDispatch} from 'react-redux';

import {deleteUserThunk} from '../../store'

const User = ({user}) => {
    const dispatch = useDispatch();
    console.log(user);
    return (
        <>
            <Card style={{width: '18rem'}}>
                <Card.Body>
                    <Card.Title>{user.email}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{user.country}</Card.Subtitle>
                    <Card.Text>{user.textarea}</Card.Text>
                    <Card.Img height={'200px'} src={user.avatar}/>
                </Card.Body>
                <Button onClick={dispatch(deleteUserThunk({_id: user._id}))}>Delete</Button>
            </Card>
        </>
    );
};

export {User};
