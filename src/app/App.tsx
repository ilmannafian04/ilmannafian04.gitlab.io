import React, { FunctionComponent } from 'react';
import Container from '@material-ui/core/Container';

import Intro from './Intro';
import Navbar from './Navbar';

const App: FunctionComponent = () => {
    return (
        <>
            <Navbar />
            <Container>
                <Intro />
            </Container>
        </>
    );
};

export default App;
