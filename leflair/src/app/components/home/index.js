import React, { PureComponent } from 'react';
import Helmet from '../../_utils/helmet';

import imgArchitect from '../../../images/architect.png';

class HomePage extends PureComponent {
    render() {
        return (
            <div id="homePage">
                <Helmet title="Home" description="Home page descript" />
                <div className="container">
                    <h4 className="title">Guide</h4>
                    <img src={imgArchitect} alt="architect" />

                    <div className="mainContent">
                        <div className="eachRow">
                            <strong>Operating system: </strong>
                            <span>Mac OS</span>
                        </div>
                        <div className="eachRow">
                            <strong>Install: </strong>
                            <span>dfdf</span>
                        </div>
                        <div className="eachRow">
                            <strong>Design: </strong>
                            <span>dfdf</span>
                        </div>
                        <div className="eachRow">
                            <strong>Structure : </strong>
                            <span>dfdf</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;
