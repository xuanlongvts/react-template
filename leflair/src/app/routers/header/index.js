'use strict';

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Route, Link, withRouter } from 'react-router-dom';
import $ from 'jquery';
import _ from 'lodash';

import { isDesktop } from '../../_utils/func';

import RoutersAuthen from '../RoutersAuthen';

import imgLogo from '../../../images/logo.png';

class Header extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            routes: RoutersAuthen,
            isMenuToggle: false,
            dropdownOpen: false
        };

        this.handleMenu = this.handleMenu.bind(this);
    }

    componentDidMount() {
        $(window).on('resize', function() {
            if (isDesktop()) {
                $('body').removeClass('menu-opened');
            } else if ($('#menuSub').css('display') === 'block') {
                $('body').addClass('menu-opened');
            }
        });

        $('.nav a').click(function() {
            $('body').removeClass('menu-opened');
            $('#menuSub').slideUp(200);
        });
    }

    handleMenu() {
        const { isMenuToggle } = this.state;

        this.setState({
            isMenuToggle: !isMenuToggle
        });

        $('#header #menuSub').slideToggle(200);
        $('body').toggleClass('menu-opened');
    }

    render() {
        const { routes } = this.state;
        const { quantity } = this.props;

        return (
            <header id="header">
                <div className="container">
                    <Link to="/" className="logo">
                        <img src={imgLogo} alt="Logo" width="85" />
                    </Link>
                    <div className="burger-container" onClick={_.debounce(this.handleMenu, 150)}>
                        <div id="burger">
                            <div className="bar topBar" />
                            <div className="bar btmBar" />
                        </div>
                    </div>

                    <div id="menuSub">
                        {routes.length && (
                            <ul className="nav">
                                {routes.map((route, key) => {
                                    return (
                                        <Route key={key} path={route.path} exact={route.exact}>
                                            {({ match }) => {
                                                return (
                                                    <li className={match ? 'active' : null}>
                                                        <Link to={route.path}>
                                                            <span className="link">{route.title}</span>
                                                            {route.path === '/cart' && <span className="numberCart">{quantity}</span>}
                                                        </Link>
                                                    </li>
                                                );
                                            }}
                                        </Route>
                                    );
                                })}
                            </ul>
                        )}
                    </div>
                </div>
            </header>
        );
    }
}

const mapStateToProps = state => {
    return {
        quantity: state.reducCart.getIn(['carts', 'quantityTotal'])
    };
};

// const mapDispatchToProps = {
//     addToCart
// };

export default withRouter(connect(mapStateToProps)(Header));
