import React from 'react';
import { mount, shallow } from 'enzyme';

import Button from './components';

const clickFn = jest.fn();

describe('Button', () => {
    it('button click should hide component', () => {
        const component = shallow(<Button onclick = {clickFn}
        /> );

        component 
        .find('button#my-button-two')
        .simulate('click');

        expect(clickFn).toHaveBeenCalled();
    });

});

