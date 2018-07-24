'use strict';

import React, { PureComponent } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ScrollToTop from './scrollToTop';

import Header from './header';
import Footer from './footer';
import NotFound from '../components/NotFound';
import Loading from '../components/_base/loading';
import RoutersAuthen from './RoutersAuthen';

class Routers extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            routes: RoutersAuthen
        };
    }

    render() {
        const { routes } = this.state;

        return (
            <BrowserRouter>
                <div className="app">
                    <Header />

                    <ScrollToTop>
                        <Switch>
                            {routes.length && routes.map((route, key) => <Route key={key} {...route} />)}
                            <Route component={NotFound} />
                        </Switch>
                    </ScrollToTop>

                    <Footer />
                    <Loading />
                </div>
            </BrowserRouter>
        );
    }
}

export default Routers;
