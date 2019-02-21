import React, { PureComponent } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Drawer from './drawer';
import NotFound from '../components/NotFound';
import RoutersUnAuthen from './RoutersUnAuthen';
import RoutersAuthen from './RoutersAuthen';

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

                const subSelf = {
                    title: route.title,
                    path: route.path,
                    component: route.component,
                };
                routesMatch.push(this.onceRouter(key, subSelf));
            } else {
                routesMatch.push(this.onceRouter(key, route));
            }
        });

        return routesMatch;
    }

    render() {
        const { isLogin, routes } = this.state;
        const { classes } = this.props;

        if (!isLogin) {
            return (
                <BrowserRouter>
                    <Switch>
                        {this.listRouter(RoutersUnAuthen)}
                        <Route component={NotFound} />
                    </Switch>
                </BrowserRouter>
            );
        }

        return (
            <BrowserRouter>
                <div className={classes.root}>
                    <Drawer />
                    <main className={classes.content}>
                        <div className={classes.appBarSpacer} />
                        <Switch>
                            {routes.length && this.listRouter(routes)}
                            <Route component={NotFound} />
                        </Switch>
                    </main>
                </div>
            </BrowserRouter>
        );
    }
}

Routers.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Routers);
