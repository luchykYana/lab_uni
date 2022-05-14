import {NavLink} from 'react-router-dom';
import {Col, Container, Row} from 'react-bootstrap';

import './Header.css';

const Header = () => {
    return (
        <Container fluid>
            <Row className={'header bg-dark d-flex justify-content-center align-content-center gap-0'}>
                <Col className={'col-2'}>
                    <NavLink to={'/'}>Sing up</NavLink>
                </Col>
                <Col className={'col-2'}>
                    <NavLink to={'/game'}>Chess board</NavLink>
                </Col>
                <Col className={'col-2'}>
                    <NavLink to={'/logIn'}>Log in</NavLink>
                </Col>
            </Row>
        </Container>
    );
};

export {Header};
