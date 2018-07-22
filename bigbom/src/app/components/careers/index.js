import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

import Helmet from '../../_utils/helmet';

import CareerHome from './careers-home';

import CareerDetails from './careers-details';
import NotFound from '../NotFound';

class CareersIndex extends PureComponent {
    componentDidMount() {
        this.onResponsive();
        window.addEventListener('resize', this.onResponsive);
    }

    onResponsive() {
        let width = '25%';
        const elements = document.getElementsByClassName('column');
        const windowWidth = window.innerWidth;
        if (windowWidth < 321) {
            width = '100%';
        } else if (windowWidth < 769) {
            width = '50%';
        } else {
            width = '25%';
        }
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.msFlex = width; // IE10
            elements[i].style.flex = width;
        }
    }

    render() {
        const { match } = this.props;

        const listSubLink = [
            {
                title: 'Career',
                path: `${match.url}`,
                exact: true,
                component: CareerHome
            },
            {
                title: 'Career Details',
                path: `${match.url}/:positionId`,
                component: CareerDetails
            }
        ];

        return (
            <div id="careers">
                <Helmet />

                <Switch>
                    {listSubLink.length && listSubLink.map((route, key) => <Route key={key} {...route} />)}
                    <Route component={NotFound} />
                </Switch>
            </div>
        );
    }
}

CareersIndex.propTypes = {
    match: PropTypes.object.isRequired
};

export default CareersIndex;
