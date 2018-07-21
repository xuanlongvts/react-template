import React from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';

const LogoRender = ({ logo }) => {
    return (
        <a href={logo.link} target="_blank" className={logo.name} rel="noopener noreferrer">
            <LazyLoad height={200} offset={200} once>
                <img src={logo.src} alt={logo.name} />
            </LazyLoad>
        </a>
    );
};

LogoRender.propTypes = {
    logo: PropTypes.object.isRequired
};

export default LogoRender;
