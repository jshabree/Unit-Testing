import React from 'react';
import { mount, shallow } from 'enzyme';

import Button from './components';

// mount can be used instead of shallow to interact with a child component

it ('should be possible to activate a button with spacebar', () => {
    const component = mount(<Button />);

    component
    .find('button#my-button-one')
    .simulate('keydown', { keyCode: 32 });

    expect(component).toMatchSnapshot();
    component.unmount();

});