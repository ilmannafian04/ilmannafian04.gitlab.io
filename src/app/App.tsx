import React, { FunctionComponent } from 'react';
import Container from '@material-ui/core/Container';

import Intro from './Intro';
import Navbar from './Navbar';
import Skill from './Skill';

const App: FunctionComponent = () => {
    return (
        <>
            <Navbar />
            <Container>
                <Intro />
                <Skill />
            </Container>
        </>
    );
};

export default App;
