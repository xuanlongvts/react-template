import React, { PureComponent, Suspense } from 'react';

import LoadingComp from '../_base/loadingComp';

const asynComponent = ImportComponent => {
    class AsyncComponent extends PureComponent {
        constructor(props) {
            super(props);
        }

        render() {
            return (
                <Suspense fallback={<LoadingComp />}>
                    <ImportComponent {...this.props} />
                </Suspense>
            );
        }
    }

    return AsyncComponent;
};

export default asynComponent;
