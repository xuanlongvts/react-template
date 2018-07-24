'use strict';

import React, { PureComponent } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Loading extends PureComponent {
    render() {
        const { isLoading } = this.props;
        return isLoading ? (
            <div className="boxLoading">
                <p className="loading" />
            </div>
        ) : null;
    }
}

Loading.propTypes = {
    isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
    return {
        isLoading: state.loadingRoot.get('isLoading')
    };
};

export default connect(mapStateToProps)(Loading);
