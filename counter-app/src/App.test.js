// test that app renders without crashing 

import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// dummy test

describe('Addition', () => {
  it('knows that 2 and 2 make 4', () => {
    expect(2+2).toBe(4);
  });
});

// it and test are aliases

test('knows that 2 and 2 make 4', () => {
  expect(2 + 2).toBe(4);  // matcher function
});


// testing app's initial state using shallow rendering

describe('App component', () => {
  it('starts with a count of 0', () => {
    const wrapper = shallow(<App />);
    const text = wrapper.find('p').text();
    expect(text).toEqual('Count: 0');
    });
});

// testing user's interaction to see if count is indeed incremented ( in this case, by 1)

describe('App', () => {
  it('increments count by 1 when button is clicked', () => {
    const wrapper = shallow(<App />);
    const incrementButton = wrapper.find('button.increment');
    incrementButton.simulate('click');
    const text = wrapper.find('p').text();
    expect(text).toEqual('Count: 1');
  });
});