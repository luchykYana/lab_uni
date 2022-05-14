import {Col, Container, Row} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {useDispatch} from 'react-redux';

import {UserInfo} from '../../components';
import {getAllUsers} from '../../store';

const LogInPage = () => {
    const dispatch = useDispatch();

    return (
        <Container>
            <Row>
                <Col>
                    <Button className={'mt-2'} variant="primary" onClick={dispatch(getAllUsers())}>Users</Button>
                </Col>
                <Col>
                    <UserInfo key={1}/>
                </Col>
            </Row>
        </Container>
    );
};

export {LogInPage};
