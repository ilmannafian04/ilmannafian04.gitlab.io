import React from 'react';
import { shallow } from 'enzyme';
import 'enzyme-adapter-react-16';

import App from './App';
import Navbar from './Navbar';

describe('app test', () => {
    it('renders all child component', () => {
        expect.hasAssertions();
        const wrapper = shallow(<App />);
        expect(wrapper.contains(<Navbar />)).toBe(true);
    });
});
