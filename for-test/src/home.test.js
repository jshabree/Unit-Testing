import React from 'react';
import { shallow } from 'enzyme';

import Home from './components';


describe('Home', () => {
    it('should render correctly in debug mode', () => {

        const component = shallow(<Home debug />);

        expect(component).toMatchSnapshot();
    });
});

// describe('Home', () => {
//     it('should render banner text correctly with given strings', () => {

//         const strings = ['one','two'];

//         const component = shallow(<Home list={strings} />);

//         expect(component).toMatchSnapshot();
//     });
// });