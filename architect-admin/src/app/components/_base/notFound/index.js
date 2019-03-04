import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import imgNotFound from './not-found.png';
import RouterConst from '../../../routers/consts';
import { history } from '../../../stores';

class NotFound extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            timeOut: 5,
        };
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    tick() {
        let { timeOut } = this.state;
        timeOut === 0 && history.push(RouterConst.dashboard);
        timeOut > 0 &&
            this.setState({
                timeOut: --timeOut,
            });
    }

    render() {
        const { timeOut } = this.state;

        return (
            <div className="notFound">
                <p style={{ fontSize: '20px' }}>
                    Redirect to dashboard after <span style={{ color: 'red', fontSize: '30px' }}>{timeOut}</span> seconds
                </p>
                <div className="container">
                    <img src={imgNotFound} alt="Not found" />
                    <p className="txt">Opps! Sorry, we could not find this page</p>
                    <Link to={RouterConst.dashboard} style={{ color: '#fff', textDecoration: 'none' }}>
                        <Button variant="contained" color="primary">
                            Go home
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default NotFound;
