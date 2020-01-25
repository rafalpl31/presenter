import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('<App>', () => {

  it('renders all expected elements', () => {
    const component = shallow(<App/>);

    expect(component.find('.App-header')).toHaveLength(1);
    expect(component.find('DayLightPhases')).toHaveLength(1);
  });

});
