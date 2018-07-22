import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const RenderNextArrow = ({ className, style, onClick }) => {
    return (
        <button className={className} style={{ ...style, display: 'block' }} onClick={onClick}>
            <FontAwesomeIcon icon={faAngleRight} />
        </button>
    );
};

RenderNextArrow.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    onClick: PropTypes.func
};

export default RenderNextArrow;
