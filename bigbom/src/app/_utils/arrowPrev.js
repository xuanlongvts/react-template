import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

const RenderPrevArrow = ({ className, style, onClick }) => {
    return (
        <button className={className} style={{ ...style, display: 'block' }} onClick={onClick}>
            <FontAwesomeIcon icon={faAngleLeft} />
        </button>
    );
};

RenderPrevArrow.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    onClick: PropTypes.func
};

export default RenderPrevArrow;
