'use strict';

import React from 'react';
import { Link } from 'react-router-dom';
import imgNotFound from '../../images/not-found.png';

export default () => (
    <div className="notFound">
        <div className="container">
            <img src={imgNotFound} alt="Not found" />
            <p className="txt">Opps! Sorry, we could not find the page</p>
            <Link to="/" className="buttonGrey">
                Go home
            </Link>
        </div>
    </div>
);
