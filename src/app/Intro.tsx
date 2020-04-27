import React, { FunctionComponent, useEffect, useState } from 'react';
import { createStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';

// noinspection JSUnusedGlobalSymbols
const useStyles = makeStyles(() =>
    createStyles({
        introContainer: {
            height: (introHeight: number): number => introHeight,
        },
    }),
);

const Intro: FunctionComponent = () => {
    const [introHeight, setIntroHeight] = useState(window.innerHeight);
    useEffect(() => {
        const heightChangeHandler = (): void => {
            setIntroHeight(window.innerHeight);
        };
        window.addEventListener('resize', heightChangeHandler);
        return (): void => {
            window.removeEventListener('resize', heightChangeHandler);
        };
    }, []);
    const classes = useStyles(introHeight);
    return (
        <Box display="flex" justifyContent="center" alignItems="center" className={classes.introContainer}>
            <Typography variant="h2">
                Hello, names
                <br />
                Ilman
            </Typography>
        </Box>
    );
};

export default Intro;
