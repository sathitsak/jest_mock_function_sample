import React from 'react';
import ReactDOM from 'react-dom';
import App,{forEach} from './App';




it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

describe('Examining the syntax of Jest tests', () => {
   
  it('sums numbers', () => {
      expect(1 + 2).toEqual(3);
      expect(2 + 2).toEqual(4);
   });
});

const mockCallback = jest.fn(x => 42 + x);
forEach([0, 1], mockCallback);

// The mock function is called twice
expect(mockCallback.mock.calls.length).toBe(2);

