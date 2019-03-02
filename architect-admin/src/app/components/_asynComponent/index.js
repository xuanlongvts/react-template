import React, { PureComponent, Suspense } from 'react';
import { connect } from 'react-redux';
import LoadingComp from '../_base/loadingComp';

export default ImportComponent => {
    class AsyncComponent extends PureComponent {
        constructor(props) {
            super(props);
        }

        componentDidMount() {
            const { memToken } = this.props;
            console.log('mem: ', memToken);
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

    return connect(mapStateToProps)(AsyncComponent);
};
