import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import imgNotFound from './not-found.png';

export default () => (
    <div className="notFound">
        <div className="container">
            <img src={imgNotFound} alt="Not found" />
            <p className="txt">Opps! Sorry, we could not find this page</p>
            <Button variant="contained" color="primary">
                <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>
                    Go home
                </Link>
            </Button>
        </div>
    </div>
);
