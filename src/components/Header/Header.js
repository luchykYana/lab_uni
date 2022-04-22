import {NavLink} from 'react-router-dom';
import {useState} from 'react';
import {Button, Col, Container, Image, Row} from 'react-bootstrap';

import './Header.css';

const Header = () => {
    const [photo, setPhoto] = useState(false);

    const show = () => {
        if (localStorage.getItem('user')) {
            setPhoto(JSON.parse(localStorage.getItem('user')).avatar);
        }
    }

    const exit = () => {
        localStorage.removeItem('user');

        setPhoto(false);
    }

    return (
        <Container fluid>
            <Row className={'header bg-dark d-flex justify-content-center align-content-center gap-0'}>
                <Col className={'col-2 mt-2'}>
                    <NavLink to={'/'}>Log in</NavLink>
                </Col>
                <Col className={'col-2 mt-2'}>
                    <NavLink to={'/game'}>Chess board</NavLink>
                </Col>
                {photo && <Col className={'col-6 d-flex justify-content-end'}>
                    <Image src={photo} width={'60px'} height={'60px'}/>
                    <Button variant={'outline-primary'} className={'mx-2'} onClick={exit}>Log out</Button>
                </Col>}
                {!photo && <Col className={'col-6 d-flex justify-content-end'}>
                    <Button variant={'outline-primary'} onClick={show}>Show avatar</Button>
                </Col>}
            </Row>
        </Container>
    );
};

export {Header};
