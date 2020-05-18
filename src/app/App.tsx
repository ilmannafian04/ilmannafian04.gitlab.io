import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import React, { FunctionComponent } from 'react';
import { Route, Switch } from 'react-router-dom';

import Admin from './Admin';
import Intro from './Intro';
import Navbar from './Navbar';
import Skill from './Skill';

const App: FunctionComponent = () => {
    return (
        <>
            <Navbar />
            <Box pb={2}>
                <Container>
                    <Switch>
                        <Route path="/">
                            <Intro />
                            <Skill />
                        </Route>
                        <Route path="/lol">
                            <Admin />
                        </Route>
                    </Switch>
                </Container>
            </Box>
        </>
    );
};

export default App;
