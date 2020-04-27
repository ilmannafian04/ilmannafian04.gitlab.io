import React from 'react';
import { shallow } from 'enzyme';
import Intro from './Intro';

describe('<Intro />', () => {
    it('render without error', () => {
        expect.hasAssertions();
        const wrapper = shallow(<Intro />);
        expect(wrapper.text()).toContain('Hello');
    });
});
