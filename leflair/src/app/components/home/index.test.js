import React from 'react';
import TestRenderer from 'react-test-renderer';

import Home from './index';

describe('Home component', () => {
    it('render correctly', () => {
        const tree = TestRenderer.create(<Home />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
