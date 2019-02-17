import React, { PureComponent } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import RoutersAuthen from '../RoutersAuthen';

class Nav extends PureComponent {
    menuDyn(data) {
        let menuNew = [];
        data.forEach((iMenu, key) => {
            const { title, sub, exact, path, icon } = iMenu;

            if (iMenu.hasOwnProperty('sub')) {
                menuNew.push(this.renderItem(key, title, path, exact, icon, sub));
                this.menuDyn(iMenu.sub);
            } else {
                menuNew.push(this.renderItem(key, title, path, exact, icon, false));
            }
        });
        return menuNew;
    }

    renderItem(key, name, path, exact, icon, isSub) {
        let link;
        let sub = [];
        link = (
            <Route key={key} path={path} exact={exact}>
                {({ match }) => {
                    let isActive = match ? 'active ' : '';
                    let hasSub = isSub ? 'hasSub' : '';
                    return (
                        <li className={`${isActive}${hasSub}`}>
                            <Link to={path} className="levDirec">
                                <ListItem button>
                                    <ListItemIcon>{icon && icon}</ListItemIcon>
                                    <ListItemText primary={name} />
                                    {hasSub && isActive ? <ExpandLess /> : hasSub && <ExpandMore />}
                                </ListItem>
                            </Link>
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
