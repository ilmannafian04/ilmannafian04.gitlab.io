import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import React, { FunctionComponent } from 'react';
import { Route, Switch } from 'react-router-dom';

import Admin from './admin/Admin';
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
                        <Route path="/lol">
                            <Box pt={8}>
                                <Admin />
                            </Box>
                        </Route>
                        <Route path="/">
                            <Intro />
                            <Skill />
                        </Route>
                    </Switch>
                </Container>
            </Box>
        </>
    );
};

export default App;
