import React, { FunctionComponent } from 'react';
import Container from '@material-ui/core/Container';

import Intro from './Intro';
import Navbar from './Navbar';
import Skill from './Skill';
import { Box } from '@material-ui/core';

const App: FunctionComponent = () => {
    return (
        <>
            <Navbar />
            <Box pb={2}>
                <Container>
                    <Intro />
                    <Skill />
                </Container>
            </Box>
        </>
    );
};

export default App;
