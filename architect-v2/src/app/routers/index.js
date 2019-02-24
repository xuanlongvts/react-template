import React, { PureComponent, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Header from './header';
import Footer from './footer';

import NotFound from '../components/NotFound';
import RoutersUnAuthen from './RoutersUnAuthen';
import RoutersAuthen from './RoutersAuthen';

class Routers extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: true,
            routes: [],
            routesMatch: [],
        };
    }

    componentDidMount() {
        const { isLogin } = this.state;
        if (isLogin) {
            this.setState({
                routes: RoutersAuthen,
            });
        } else {
            this.setState({
                routes: RoutersUnAuthen,
            });
        }
    }

    onceRouter(key, route) {
        return <Route key={key} {...route} />;
    }

    listRouter(data) {
        const { routesMatch } = this.state;

        data.forEach((route, key) => {
            if (route.hasOwnProperty('sub')) {
                this.listRouter(route.sub);

                let subSelf = {
                    title: route.title,
                    path: route.path,
                    component: route.component,
                };
                routesMatch.push(this.onceRouter(key, subSelf));
            } else {
                routesMatch.push(this.onceRouter(key, route));
            }
        });
        console.log(routesMatch);
        return routesMatch;
    }

    render() {
        const { routes } = this.state;

        return (
            <BrowserRouter>
                <Fragment>
                    <Helmet titleTemplate="%s - React.js Boilerplate" defaultTitle="Default React.js Boilerplate">
                        <meta name="description" content="A React.js Boilerplate application" />
                    </Helmet>

                    <Header routes={routes} />

                    <Switch>
                        {routes.length && this.listRouter(routes)}
                        <Route component={NotFound} />
                    </Switch>

                    <Footer />
                </Fragment>
            </BrowserRouter>
        );
    }
}

export default Routers;
