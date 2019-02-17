import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Route, Link, withRouter } from 'react-router-dom';

import RoutersAuthen from '../RoutersAuthen';

class Nav extends PureComponent {
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
        return <ul className="nav">{this.menuDyn(RoutersAuthen)}</ul>;
    }
}

export default withRouter(Nav);
