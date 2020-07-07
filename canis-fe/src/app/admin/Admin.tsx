import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Axios from 'axios';
import update from 'immutability-helper';
import React, { ChangeEvent, FormEvent, FunctionComponent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import SkillForm from './SkillForm';

interface LoginFormState {
    username: string;
    password: string;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '25ch',
            },
        },
    }),
);

const Admin: FunctionComponent = () => {
    const classes = useStyles();
    const [loginFormState, setLoginFormState] = useState<LoginFormState>({ username: '', password: '' });
    const [loggedIn, setLoggedIn] = useState<boolean>(false);
    const handleFormChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const target = event.target;
        setLoginFormState(
            update(loginFormState, {
                [target.name]: { $set: target.value },
            }),
        );
    };
    const handleFormSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        Axios.post('/auth/login', loginFormState).then((response) => {
            window.sessionStorage.setItem('yep', response.data['access_token']);
            setLoggedIn(true);
        });
    };
    useEffect(() => {
        window.sessionStorage.getItem('yep') !== null ? setLoggedIn(true) : setLoggedIn(false);
    }, []);
    return (
        <>
            <Link to="/">Back</Link>
            {loggedIn ? (
                <>
                    <SkillForm />
                </>
            ) : (
                <form noValidate onSubmit={handleFormSubmit}>
                    <Box className={classes.root}>
                        <TextField
                            onChange={handleFormChange}
                            value={loginFormState.username}
                            name="username"
                            label="Username"
                            required={true}
                        />
                        <TextField
                            onChange={handleFormChange}
                            value={loginFormState.password}
                            name="password"
                            label="Password"
                            required={true}
                            type="password"
                        />
                    </Box>
                    <Button type="submit">Log In</Button>
                </form>
            )}
        </>
    );
};

export default Admin;
