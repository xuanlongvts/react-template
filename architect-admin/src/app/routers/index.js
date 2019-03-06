import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { Router, Route, Redirect, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { history } from '../stores';
import localStogeAdapter from '../_utils/localStorage';
import Drawer from './drawer';
import NotFound from '../components/_base/notFound';
import RoutersApp, { nameRouterApiLess, nameRouterApiFull, routerUnAuthen, personalDoc } from './RoutersAuthen';

const styles = () => ({
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
        paddingTop: '64px',
    },
});

class Routers extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            routeAuthen: [],
            routesMatch: [],
        };
    }

    static getDerivedStateFromProps(props) {
        if (props.memToken) {
            return {
                routeAuthen: localStogeAdapter.getItemJson('memToken') === 'admin' ? nameRouterApiFull : nameRouterApiLess,
            };
        }
        return null;
    }

    onceRouter = (key, route) => <Route key={key} {...route} />;

    notFoundRouter = () => <Route path="*" component={NotFound} />;

    authenRouterList(data, routeAuthen) {
        const { routesMatch } = this.state; // decalre in state to hold value

        data.forEach((route, key) => {
            key = Math.random();
            const isExistRouter = routeAuthen.includes(route.name);
            if (isExistRouter) {
                if (route.hasOwnProperty('sub')) {
                    this.authenRouterList(route.sub, routeAuthen);
                } else {
                    routesMatch.push(this.onceRouter(key, route));
                }
            }
        });

        return routesMatch;
    }

    unAuthRouter(data) {
        const routers = [];
        data.forEach((route, key) => {
            routers.push(this.onceRouter(key, route));
        });

        return routers;
    }

    render() {
        const { routeAuthen } = this.state;
        const { classes, memToken } = this.props;

        return (
            <Router history={history}>
                {!memToken ? (
                    <Switch>
                        {this.unAuthRouter(routerUnAuthen)}
                        <Redirect to="/" />
                    </Switch>
                ) : (
                    <Fragment>
                        <Drawer />
                        <main className={classes.content}>
                            <Switch>
                                {routeAuthen.length && this.authenRouterList(RoutersApp, routeAuthen)}
                                {personalDoc.length && this.unAuthRouter(personalDoc)}
                                {this.notFoundRouter()}
                            </Switch>
                        </main>
                    </Fragment>
                )}
            </Router>
        );
    }
}

Routers.propTypes = {
    classes: PropTypes.object.isRequired,
    isRouterFull: PropTypes.bool.isRequired, // remover later
    memToken: PropTypes.string,
};

const mapStateToProps = state => {
    return {
        isRouterFull: state.reducerAccount.get('isRouterFull'),
        memToken: state.reducerAccount.get('memToken'),
    };
};

export default connect(mapStateToProps)(withStyles(styles)(Routers));
