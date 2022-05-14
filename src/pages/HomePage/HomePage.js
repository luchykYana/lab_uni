import {Col, Container, Row} from 'react-bootstrap';
import {useState} from 'react';

import {Avatar, UserForm} from '../../components';

const HomePage = () => {
    const [user, setUser] = useState({avatar: ''});

    return (
        <Container>
            <Row className={'gap-5 mx-5'}>
                <Col className={'col-5 mx-5'}>
                    <UserForm setUser={setUser} user={user}/>
                </Col>
                <Col className={'mx-5'}>
                    <Avatar setUser={setUser} user={user}/>
                </Col>
            </Row>
        </Container>
    );
};

export {HomePage};
