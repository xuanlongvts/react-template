'use strict';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const HelmetComponent = ({ title, description }) => (
    <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
    </Helmet>
);

HelmetComponent.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string
};

export default HelmetComponent;
