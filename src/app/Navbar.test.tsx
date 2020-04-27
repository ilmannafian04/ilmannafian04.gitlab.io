import React from 'react';
import { shallow } from 'enzyme';
import Navbar from './Navbar';

describe('<Navbar />', () => {
    it('render without error', () => {
        expect.hasAssertions();
        const wrapper = shallow(<Navbar />);
        expect(wrapper.debug()).toContain('discord');
    });
});
