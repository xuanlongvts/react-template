import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Link, withRouter } from 'react-router-dom';
import $ from 'jquery';
import _ from 'lodash';

import localStogeAdapter from '../../_utils/localStorage';

import imgLogo from '../../../images/logo.png';
import { isDesktop, totalQuantity } from '../../_utils/func';
import RoutersAuthen from '../RoutersAuthen';
import { openCart } from '../../components/cart/actions';

class Header extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            routes: RoutersAuthen,
            isMenuToggle: false
        };

        this.handleMenu = this.handleMenu.bind(this);
        this.handleOpenCart = this.handleOpenCart.bind(this);
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

    componentDidUpdate(prevProps) {
        const { carts } = this.props;

        if (carts.length === 0) {
            localStogeAdapter.removeItem('carts');
        } else if (!_.isEqual(prevProps.carts, carts)) {
            setTimeout(() => {
                carts.length && localStogeAdapter.setItemJson('carts', carts);
            }, 10);
        }

        return null;
    }

    handleMenu() {
        const { isMenuToggle } = this.state;

        this.setState({
            isMenuToggle: !isMenuToggle
        });

        $('#header #menuSub').slideToggle(200);
        $('body').toggleClass('menu-opened');
    }

    handleOpenCart() {
        const { openCart } = this.props;
        openCart();

        $('html').addClass('openCart');
        $('body').append('<div class="overlay">&nbsp;</div>');

        $('body').removeClass('menu-opened');
        $('#menuSub').slideUp(200);
    }

    render() {
        const { routes } = this.state;
        const { carts } = this.props;
        let quantity = carts.length ? totalQuantity(carts) : 0;

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

                    {quantity > 0 ? (
                        <div className="cartMobile">
                            <span className="linkMenu" onClick={this.handleOpenCart}>
                                <span className="link">Cart</span>
                                <span className="numberCart">{quantity}</span>
                            </span>
                        </div>
                    ) : null}

                    <div id="menuSub">
                        {routes.length && (
                            <ul className="nav">
                                {routes.map((route, key) => {
                                    if (!route.isNotMenu) {
                                        if (route.path === '/cart') {
                                            return (
                                                <li key={key}>
                                                    <span className="linkMenu" onClick={carts.length ? this.handleOpenCart : null}>
                                                        <span className="link">{route.title}</span>
                                                        <span className="numberCart">{quantity}</span>
                                                    </span>
                                                </li>
                                            );
                                        }
                                        return (
                                            <Route key={key} path={route.path} exact={route.exact}>
                                                {({ match }) => {
                                                    return (
                                                        <li className={match ? 'active' : null}>
                                                            <Link to={route.path}>
                                                                <span className="link">{route.title}</span>
                                                            </Link>
                                                        </li>
                                                    );
                                                }}
                                            </Route>
                                        );
                                    }

                                    return null;
                                })}
                            </ul>
                        )}
                    </div>
                </div>
            </header>
        );
    }
}

Header.propTypes = {
    carts: PropTypes.array.isRequired,
    openCart: PropTypes.func.isRequired
};

const mapStateToProps = state => {
    return {
        carts: state.reducCart.getIn(['carts', 'listCarts']).toJS()
    };
};

const mapDispatchToProps = {
    openCart
};

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Header)
);
