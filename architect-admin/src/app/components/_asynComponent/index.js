import React, { PureComponent, Suspense } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { withRouter } from 'react-router-dom';

import LoadingComp from '../_base/loadingComp';

export default ImportComponent => {
    class AsyncComponent extends PureComponent {
        constructor(props) {
            super(props);
        }

        componentDidMount() {
            const { memToken, push } = this.props;
            console.log('mem: ', memToken);
            !memToken && push('/');
        }

        render() {
            return (
                <Suspense fallback={<LoadingComp />}>
                    <ImportComponent {...this.props} />
                </Suspense>
            );
        }
    }

    // return AsyncComponent;

    const mapStateToProps = state => {
        return {
            memToken: state.reducerAccount.get('memToken'),
        };
    };

    const mapDispatchToProps = {
        push,
    };

    return withRouter(
        connect(
            mapStateToProps,
            mapDispatchToProps,
        )(AsyncComponent),
    );
};
