import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import imgNotFound from './not-found.png';

import RouterConst from '../../../routers/consts';

export default () => (
    <div className="notFound">
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
