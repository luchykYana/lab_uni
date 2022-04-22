import {Button, Form} from 'react-bootstrap';
import {useState} from 'react';

import {Timer} from '../Timer/Timer';

const Time = () => {
    const [time, setTime] = useState(null);

    const submit = (e) => {
        e.preventDefault();

        const mas = e.target.formBasicInput.value.split(':');
        const sec = +mas[0] * 60 + +mas[1];

        sec > 30 ? setTime(sec) : setTime(30);
    }

    return (
        <div>
            {time === null && <Form onSubmit={submit} className={'d-flex mt-3 p-2 px-5 align-items-center'}>

                <Form.Group className="mb-3" controlId="formBasicInput">
                    <Form.Label>Enter time for timer (time > 30)</Form.Label>
                    <Form.Control type="time" className={''}/>
                    <Form.Text className="text-muted">Default time: 30 seconds</Form.Text>
                </Form.Group>

                <Button variant="primary" type="submit" className={'h-25 mx-2 mb-2'}>
                    Submit
                </Button>

            </Form>}

            {time && <Timer time={time} restart={setTime}/>}
        </div>
    );
};

export {Time};
