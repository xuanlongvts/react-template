import React, { PureComponent } from 'react';
import Helmet from '../../_utils/helmet';

class HomePage extends PureComponent {
    render() {
        return (
            <div id="homePage">
                <Helmet title="Home" description="Home page descript" />
                HomePage{' '}
            </div>
        );
    }
}

export default HomePage;
