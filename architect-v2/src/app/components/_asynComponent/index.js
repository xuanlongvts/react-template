import React, { PureComponent, Suspense } from 'react';

import LoadingComp from '../_base/loadingComp';

export default ImportComponent => {
    class AsyncComponent extends PureComponent {
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
