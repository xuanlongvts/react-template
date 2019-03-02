import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Router, Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import localStogeAdapter from '../_utils/localStorage';
import Drawer from './drawer';
import NotFound from '../components/_base/notFound';
import RoutersApp, { nameRouterApiLess, nameRouterApiFull, routerUnAuthen } from './RoutersAuthen';

const styles = theme => ({
    appBarSpacer: theme.mixins.toolbar,
    root: {
        display: 'flex',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
        height: '100vh',
        overflow: 'auto',
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
                routeAuthen: props.isRouterFull || localStogeAdapter.getItemJson('memToken') === 'admin' ? nameRouterApiFull : nameRouterApiLess,
            };
        }
        return null;
    }

    onceRouter = (key, route) => <Route key={key} {...route} />;
    // onceRouter = (key, route) => {
    //     const { memToken } = this.props;
    //     const { component: Component, title, exact, path } = route;
    //     return (
    //         <Route
    //             key={key}
    //             path={path}
    //             exact={exact}
    //             title={title}
    //             render={props => {
    //                 return memToken ? (
    //                     <Component {...props} />
    //                 ) : (
    //                     <Route exact path="*">
    //                         <Redirect to="/" />
    //                     </Route>
    //                 );
    //             }}
    //         />
    //     );
    // };

    notFoundRouter = () => <Route component={NotFound} />;

    authenRouterList(data, routeAuthen) {
        const { routesMatch } = this.state; // decalre in state to hold value

        data.forEach((route, key) => {
            const isExistRouter = routeAuthen.includes(route.name);
            if (isExistRouter) {
                if (route.hasOwnProperty('sub')) {
                    this.authenRouterList(route.sub, routeAuthen);

                    // const subSelf = {
                    //     title: route.title,
                    //     path: route.path,
                    //     component: route.component,
                    //     exact: route.exact,
                    // };
                    // routesMatch.push(this.onceRouter(key, subSelf));
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

        const listRouter = (
            <Switch>
                {memToken && routeAuthen.length && this.authenRouterList(RoutersApp, routeAuthen)}
                {!memToken && routerUnAuthen.length && this.unAuthRouter(routerUnAuthen)}
                {!memToken && (
                    <Route exact path="*">
                        <Redirect to="/" />
                    </Route>
                )}
                {this.notFoundRouter()}
            </Switch>
        );

        return (
            <BrowserRouter>
                <div className={classes.root}>
                    {!memToken ? (
                        listRouter
                    ) : (
                        <Fragment>
                            <Drawer />
                            <main className={classes.content}>
                                <div className={classes.appBarSpacer} />
                                {listRouter}
                            </main>
                        </Fragment>
                    )}
                </div>
            </BrowserRouter>
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
