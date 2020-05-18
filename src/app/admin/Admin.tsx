import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import update from 'immutability-helper';
import React, { ChangeEvent, FormEvent, FunctionComponent, useState } from 'react';

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

const LoginForm: FunctionComponent = () => {
    const classes = useStyles();
    const [loginFormState, setLoginFormState] = useState<LoginFormState>({ username: '', password: '' });
    const handleFormChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const target = event.target;
        if (target.name === 'username') {
            setLoginFormState(
                update(loginFormState, {
                    username: { $set: target.value },
                }),
            );
        } else if (target.name === 'password') {
            setLoginFormState(
                update(loginFormState, {
                    password: { $set: target.value },
                }),
            );
        }
    };
    const handleFormSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        console.log(loginFormState);
    };
    return (
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
    );
};

const Admin: FunctionComponent = () => {
    return (
        <>
            <LoginForm />
        </>
    );
};

export default Admin;
