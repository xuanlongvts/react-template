import React, { PureComponent, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Container } from 'reactstrap';

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
            routes: RoutersUnAuthen,
        };
    }

    componentDidMount() {
        const { isLogin } = this.state;
        if (isLogin) {
            this.setState({
                routes: RoutersAuthen,
            });
        }
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

                    <Container>
                        <Switch>
                            {routes.length && routes.map((route, key) => <Route key={key} {...route} />)}
                            <Route component={NotFound} />
                        </Switch>
                    </Container>

                    <Footer />
                </Fragment>
            </BrowserRouter>
        );
    }
}

export default Routers;
