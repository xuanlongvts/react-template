import React from 'react';
import 'jest-localstorage-mock';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '../stores';
import Routes from './index';

configure({ adapter: new Adapter() });

describe('Test react router', () => {
    it('Should test for initial route', () => {
        const component = mount(
            <MemoryRouter initialEntries={['/']} initialIndex={0}>
                <Provider store={store()}>
                    <Routes />
                </Provider>
            </MemoryRouter>
        );

        expect(component.find('#header').length).toBe(1);
    });
});
