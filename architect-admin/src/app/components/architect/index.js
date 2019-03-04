import React, { PureComponent } from 'react';

import './style.scss';
import imgArchitect from '../../../images/architect.png';
import imgReduxCycle from '../../../images/reduxCycle.gif';

class Architect extends PureComponent {
    render() {
        return (
            <div className="home">
                <img src={imgArchitect} alt="architect" style={{ maxWidth: '80%' }} />
                <img src={imgReduxCycle} alt="redux cycle" style={{ maxWidth: '70%' }} />
                <hr />
                <div className="refer">
                    <h2>Refer:</h2>
                    <p>
                        <a href="https://github.com/gaearon" target="_blank" rel="noopener noreferrer">
                            <strong>Github:</strong>: <span>Dan Abramov</span>
                        </a>
                    </p>
                    <p>
                        <a href="https://twitter.com/dan_abramov" target="_blank" rel="noopener noreferrer">
                            <strong>Twiter:</strong>: <span>Dan Abramov</span>
                        </a>
                    </p>
                    <p>
                        <a href="https://youtu.be/V-QO-KO90iQ?t=27" target="_blank" rel="noopener noreferrer">
                            <strong>Youtube:</strong>: <span>Sophie Alpert and Dan Abramov - React Conf 2018</span>
                        </a>
                    </p>
                </div>
            </div>
        );
    }
}

export default Architect;
