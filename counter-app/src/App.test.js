// test that app renders without crashing 

import React from 'react';
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
  expect(2 + 2).toBe(4);
});