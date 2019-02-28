import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Drawer from './drawer';
import NotFound from '../components/_base/notFound';
import RoutersApp, { nameRouterApiLess, nameRouterApiFull } from './RoutersAuthen';

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
                routeAuthen: props.isRouterFull ? nameRouterApiFull : nameRouterApiLess,
            };
        }
        return null;
    }

    componentDidMount() {
        this.setState({
            routeAuthen: nameRouterApiFull,
        });
    }

    onceRouter = (key, route) => <Route key={key} {...route} />;

    notFoundRouter = () => <Route component={NotFound} />;

    authenRouterList(data, routeAuthen) {
        const { routesMatch } = this.state; // decalre in state to hold value

        data.forEach((route, key) => {
            const isExistRouter = routeAuthen.includes(route.name);
            if (isExistRouter) {
                if (route.hasOwnProperty('sub')) {
                    this.authenRouterList(route.sub, routeAuthen);

                    const subSelf = {
                        title: route.title,
                        path: route.path,
                        component: route.component,
                    };
                    routesMatch.push(this.onceRouter(key, subSelf));
                } else {
                    routesMatch.push(this.onceRouter(key, route));
                }
            }
        });

        return routesMatch;
    }

    render() {
        const { routeAuthen } = this.state;
        const { classes, memToken } = this.props;

        return (
            <BrowserRouter>
                <div className={classes.root}>
                    <Fragment>
                        <Drawer />
                        <main className={classes.content}>
                            <div className={classes.appBarSpacer} />
                            <Switch>
                                {RoutersApp.length && this.authenRouterList(RoutersApp, routeAuthen)}
                                {this.notFoundRouter()}
                            </Switch>
                        </main>
                    </Fragment>
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
