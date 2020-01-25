import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

test('renders all expected elements', () => {
  const component = shallow(<App />);

  expect(component.contains('.App-header')).toEqual(true);
});
