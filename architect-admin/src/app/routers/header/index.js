import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Route, Link, withRouter } from 'react-router-dom';

import logo from '../../../images/logo.svg';

class Header extends PureComponent {
    menuDyn(data) {
        let menuNew = [];
        data.forEach((iMenu, key) => {
            const { title, sub, exact, path } = iMenu;

            if (iMenu.hasOwnProperty('sub')) {
                menuNew.push(this.renderItem(key, title, path, exact, sub));
                this.menuDyn(iMenu.sub);
            } else {
                menuNew.push(this.renderItem(key, title, path, exact, false));
            }
        });
        return menuNew;
    }

    renderItem(key, name, path, exact, isSub) {
        let link;
        let sub = [];
        link = (
            <Route key={key} path={path} exact={exact}>
                {({ match }) => {
                    let isActive = match ? 'active ' : '';
                    let hasSub = isSub ? 'hasSub' : '';
                    return (
                        <li className={`${isActive}${hasSub}`}>
                            <Link to={path}>{name}</Link>
                            {isSub && <ul className="sub">{this.menuDyn(isSub)}</ul>}
                        </li>
                    );
                }}
            </Route>
        );

        sub.push(link);
        return sub;
    }

    render() {
        const { routes } = this.props;

        return (
            <header id="header">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React v2</h1>
                </div>

                <ul className="nav">{this.menuDyn(routes)}</ul>
            </header>
        );
    }
}

Header.propTypes = {
    routes: PropTypes.array.isRequired,
};

export default withRouter(Header);
