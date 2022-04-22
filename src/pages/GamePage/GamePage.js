import {Col, Container, Row} from 'react-bootstrap';

import {Board, Diagram, Time} from '../../components';

const GamePage = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <Container>
                        <Row>
                            <Time className={'col-lg-6 mt-3 col-md-3'}/>
                        </Row>

                        <Row>
                            <Diagram/>
                        </Row>
                    </Container>
                </Col>

                <Col className={'col-lg-6 mt-3 col-md-3'}>
                    <Board/>
                </Col>
            </Row>
        </Container>
    );
};

export {GamePage};
