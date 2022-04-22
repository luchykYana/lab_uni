import {Alert, Button, Form, FormControl, InputGroup} from 'react-bootstrap';
import {joiResolver} from '@hookform/resolvers/joi';
import {useForm} from 'react-hook-form';
import {useState} from 'react';

import {UserValidator} from '../../validators';

const UserForm = ({user, setUser}) => {
    const [formError, setFormError] = useState({});
    const [noAvatar, setNoAvatar] = useState(false);
    const [success, setSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm({resolver: joiResolver(UserValidator), mode: 'onTouched'});

    const submit = (aboutUser) => {
        try {
            if (user.avatar === '') {
                setNoAvatar(true);
                setUser({...user, info: aboutUser});
            } else {
                setUser({...user, info: aboutUser});
                setNoAvatar(false);
                setSuccess(true);

                localStorage.setItem('user', JSON.stringify(user));
            }
        } catch (e) {
            setFormError(e.response.data);
        }
    };

    return (
        <Form onSubmit={handleSubmit(submit)}>
            <Form.Group className="mb-2 mt-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email"  {...register('email')}/>

                {errors.email && <Alert variant={'danger'} className={'mt-2'}>{errors.email.message}</Alert>}
            </Form.Group>

            <Form.Group className="mb-2" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" {...register('password')}/>

                {errors.password && <Alert variant={'danger'} className={'mt-2'}>{errors.password.message}</Alert>}
            </Form.Group>

            <Form.Group className="mb-2" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" {...register('rememberPassword')}/>
            </Form.Group>

            <Form.Group className="mb-2" controlId="formBasicSelect" {...register('country')}>
                <Form.Select aria-label="Default select example">
                    <option value="Ukraine">Ukraine</option>
                    <option value="England">England</option>
                    <option value="USA">USA</option>
                    <option value="France">France</option>
                    <option value="Italy">Italy</option>
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-2" controlId="formBasicCheckbox">
                <div className="mb-3 d-flex gap-4">
                    <Form.Check
                        type='radio'
                        id={`male`}
                        label={`male`}
                        name="flexRadioDefault"
                        value={'male'}
                        {...register('sex')}
                    />

                    <Form.Check
                        type='radio'
                        id={`female`}
                        label={`female`}
                        name="flexRadioDefault"
                        value={'female'}
                        {...register('sex')}
                    />
                </div>
            </Form.Group>

            <Form.Group className="mb-2" controlId="formBasicTextarea">
                <InputGroup>
                    <FormControl as="textarea"
                                 placeholder={'Write something about yourself...'} {...register('textarea')}/>
                </InputGroup>

                {errors.textarea && <Alert variant={'danger'} className={'mt-2'}>{errors.textarea.message}</Alert>}
            </Form.Group>

            <Button variant="primary" type='submit'>
                Submit
            </Button>

            <Button className={'btn-link text-white mx-3'} href={'https://www.chess.com/learn-how-to-play-chess'}
                    target={'_blank'}>
                Rules
            </Button>
            <Button className={'btn-link text-white'} href={'https://www.chess.com/puzzles/problem/57063#1'}
                    target={'_blank'}>
                Game
            </Button>

            {noAvatar && <Alert variant={'danger'} className={'mt-3'}>You forgot choose avatar</Alert>}
            {success && <Alert variant={'success'} className={'mt-3'}>You successfully sing up!</Alert>}

        </Form>
    );
};

export {UserForm};
