import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route, Link, withRouter } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Tooltip from '@material-ui/core/Tooltip';

import RoutersAuthen, { nameRouterApi, nameRouterApiFull } from '../RoutersAuthen';

class Nav extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            routeAuthen: [],
        };
    }

    static getDerivedStateFromProps(props) {
        return {
            routeAuthen: props.isRouterFull ? nameRouterApiFull : nameRouterApi,
        };
    }

    menuDyn(data, routeAuthen) {
        let menuNew = [];
        data.forEach((item, key) => {
            const { title, name, sub, exact, path, icon } = item;
            const isExistRouter = routeAuthen.includes(name);
            if (isExistRouter) {
                if (item.hasOwnProperty('sub')) {
                    menuNew.push(this.renderItem(routeAuthen, key, title, path, exact, icon, sub));
                    this.menuDyn(item.sub, routeAuthen);
                } else {
                    menuNew.push(this.renderItem(routeAuthen, key, title, path, exact, icon, false));
                }
            }
        });
        return menuNew;
    }

    renderItem(routeAuthen, key, name, path, exact, icon, isSub) {
        let link;
        let sub = [];

        const { open } = this.props;
        link = (
            <Route key={key} path={path} exact={exact}>
                {({ match }) => {
                    const isActive = match ? 'active ' : '';
                    const hasSub = isSub ? 'hasSub' : '';
                    const openStatus = !open ? 'notOpen' : '';
                    let linkElement = (
                        <Link to={path} className={`levDirec ${openStatus}`}>
                            <ListItem button className="linkTo">
                                <ListItemIcon>{icon && icon}</ListItemIcon>
                                <ListItemText primary={name} />
                                {hasSub && isActive ? <ExpandLess /> : hasSub && <ExpandMore />}
                            </ListItem>
                        </Link>
                    );
                    !open &&
                        (linkElement = (
                            <Tooltip title={name} placement="right-start">
                                {linkElement}
                            </Tooltip>
                        ));
                    return (
                        <li className={`${isActive}${hasSub}`}>
                            {linkElement}
                            {isSub && <ul className="sub">{this.menuDyn(isSub, routeAuthen)}</ul>}
                        </li>
                    );
                }}
            </Route>
        );
        sub.push(link);
        return sub;
    }

    render() {
        const { routeAuthen } = this.state;

        return <ul className="nav">{routeAuthen.length && this.menuDyn(RoutersAuthen, routeAuthen)}</ul>;
    }
}

Nav.propTypes = {
    open: PropTypes.bool.isRequired,
};

const mapStateToProps = state => {
    return {
        isRouterFull: state.reducerAccount.get('isRouterFull'),
    };
};

export default withRouter(connect(mapStateToProps)(Nav));
