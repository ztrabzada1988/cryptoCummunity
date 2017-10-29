import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

describe('Addition knows how to add', () => {
  it('knows 2 and 2 make 4', () => {
    expect(2 + 2).toBe(4);
  });
});