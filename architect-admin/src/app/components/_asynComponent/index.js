import React, { PureComponent, Suspense } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { history } from '../../stores';
import LoadingComp from '../_base/loadingComp';

export default ImportComponent => {
    class AsyncComponent extends PureComponent {
        constructor(props) {
            super(props);
        }

        componentDidMount() {
            const { memToken } = this.props;
            // !memToken && history.push('/');
        }

        render() {
            return (
                <Suspense fallback={<LoadingComp />}>
                    <ImportComponent {...this.props} />
                </Suspense>
            );
        }
    }

    AsyncComponent.propTypes = {
        memToken: PropTypes.string,
    };

    const mapStateToProps = state => {
        return {
            memToken: state.reducerAccount.get('memToken'),
        };
    };

    return withRouter(connect(mapStateToProps)(AsyncComponent));
};
