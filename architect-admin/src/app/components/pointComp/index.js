import './style.scss';
import React, { PureComponent } from 'react';

class Point extends PureComponent {
    render() {
        return (
            <div className="point">
                <ul>
                    <li>
                        + Config App flow <strong>ReactJS</strong>, <strong>Airbnb</strong> and <strong>Eslint</strong> convention
                    </li>
                    <li>+ Code clear</li>
                    <li>+ Scale, maintain</li>
                    <li>+ Authorized router is done</li>
                    <li>
                        - chrome tab network (js), check slipt file bundle.js when user click menu (avoid all file js build into one bundle.js file, when scale
                        up project, this is very useful)
                    </li>
                </ul>
            </div>
        );
    }
}

export default Point;
