import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import React, { FunctionComponent } from 'react';

import Intro from './Intro';
import Navbar from './Navbar';
import Skill from './Skill';

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
