import React from 'react';
import { shallow } from 'enzyme';
import { PageHeader } from '../atoms';
import { PageContent } from '../PageContent';
import App from './';

describe('<App>', () => {
  const requiredProps = {
    title: 'Page Title'
  };

  it('renders all expected elements', () => {
    const component = shallow(<App {...requiredProps}/>);

    expect(component.find(PageHeader)).toHaveLength(1);
    expect(component.find(PageContent)).toHaveLength(1);
  });

});
