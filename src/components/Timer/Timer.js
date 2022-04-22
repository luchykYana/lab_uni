import {Alert, Button, Col, Container, Row} from 'react-bootstrap';
import {useState} from 'react';

import './Timer.css';

const Timer = ({time, restart}) => {
    let [first, setFirst] = useState(time);
    let [second, setSecond] = useState(time);
    const [firstInterval, setFirstInterval] = useState(0);
    const [secondInterval, setSecondInterval] = useState(0);
    const [disableStart, setDisableStart] = useState(false);
    const [disableFirst, setDisableFirst] = useState(true);
    const [disableSecond, setDisableSecond] = useState(true);
    const [showAlert, setShowAlert] = useState(false);

    const start = () => {
        setFirstInterval(setInterval(startFirst, 1000));

        setDisableFirst(false);
        setDisableStart(true);
    }

    const firstTimerButton = () => {
        clearInterval(firstInterval);

        setSecondInterval(setInterval(startSecond, 1000));

        setDisableFirst(true);
        setDisableSecond(false);
    }

    const secondTimerButton = () => {
        clearInterval(secondInterval);

        setFirstInterval(setInterval(startFirst, 1000));

        setDisableFirst(false);
        setDisableSecond(true);
    }

    function startFirst() {
        if (first > 0) {
            setFirst(first--);
        } else {
            clearInterval(firstInterval);

            setDisableStart(false);
            setShowAlert(true);
        }
    }

    function startSecond() {
        if (second > 0) {
            setSecond(second--);
        } else {
            clearInterval(secondInterval);

            setDisableStart(false);
            setShowAlert(true);
        }
    }

    return (
        <Container>
            <Row>{showAlert && <Alert variant={'danger'} className={'mt-3'}>Game over!</Alert>}</Row>

            <Row className={'d-flex mt-3'}>
                <Col className={'col-3'}>
                    <Button onClick={() => restart(null)} className={'mb-3'}>New game</Button>
                </Col>

                <Col className={'col-3'}>
                    {!showAlert && <Button disabled={disableStart} onClick={start}>Start</Button>}
                </Col>
            </Row>

            {!showAlert && <Row className={'d-flex justify-content-center'}>
                <Col className={'text-center col-4'}>
                    <div className={'font-size'}>{Math.floor(first / 60)}:{first % 60}</div>

                    <Button disabled={disableFirst} onClick={firstTimerButton}>Move</Button>
                </Col>

                <Col className={'text-center col-4'}>
                    <div className={'font-size'}>{Math.floor(second / 60)}:{second % 60}</div>

                    <Button disabled={disableSecond} onClick={secondTimerButton}>Move</Button>
                </Col>
            </Row>}
        </Container>
    );
}

export {Timer};
