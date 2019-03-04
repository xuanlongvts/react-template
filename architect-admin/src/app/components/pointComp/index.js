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
                    <li>+ Authorized</li>
                </ul>
            </div>
        );
    }
}

export default Point;
