'use strict';

import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class ScrollToTop extends PureComponent {
    componentDidUpdate(prevProps) {
        const { location } = this.props;

        if (location !== prevProps.location) {
            window.scrollTo(0, 0);
        }
    }

    render() {
        const { children } = this.props;

        return children;
    }
}

ScrollToTop.propTypes = {
    children: PropTypes.object,
    location: PropTypes.object
};

export default withRouter(ScrollToTop);
