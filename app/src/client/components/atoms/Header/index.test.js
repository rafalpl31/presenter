import React from 'react';
import { shallow } from 'enzyme';
import { Header } from './';

describe('<Header/>', () => {

    it('renders h2 HTML markup with all properties', () => {
        const fakeClassName = 'bigTitle';
        const fakeTitle = 'Big Title';

        const component = shallow(<Header
            className={fakeClassName}
            title={fakeTitle}
        />);

        expect(component.find('h2').props()).toEqual({
            children: fakeTitle,
            className: fakeClassName
        });
    });

    it('renders h2 HTML markup with required properties only', () => {
        const fakeTitle = 'Big Title';

        const component = shallow(<Header
            title={fakeTitle}
        />);

        expect(component.find('h2').props()).toEqual({
            children: fakeTitle
        });
    });

});
