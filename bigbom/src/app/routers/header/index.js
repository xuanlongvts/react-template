import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Route, Link, withRouter } from 'react-router-dom';
import $ from 'jquery';
import _ from 'lodash';
import { FormattedMessage, injectIntl } from 'react-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import { isDesktop, whitepaper } from '../../_utils/func';

import RoutersAuthen from '../RoutersAuthen';

import * as langConfig from '../../_utils/languages/translate/const';
import { APP_LOCALES } from '../../_utils/languages/consts';

import imgLogo from '../../../images/logo.png';

class Header extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            routes: RoutersAuthen,
            isMenuToggle: false,
            langImg: null,
            dropdownOpen: false
        };

        this.handleMenu = this.handleMenu.bind(this);
        this.handleLangDropdown = this.handleLangDropdown.bind(this);
    }

    componentDidMount() {
        const { lang } = this.props;

        let imgSrc = null;
        imgSrc = APP_LOCALES.length && APP_LOCALES.filter(item => item.code === lang);
        imgSrc &&
            this.setState({
                langImg: imgSrc[0].imgSrc
            });

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

    handleLangDropdown() {
        const { dropdownOpen } = this.state;
        this.setState({
            dropdownOpen: !dropdownOpen
        });
    }

    selectedLanguage(lang, srcImg) {
        const { handleLanguage } = this.props;

        $('.languageCurr img').attr('src', srcImg);

        handleLanguage(lang);
    }

    render() {
        const { routes, langImg, dropdownOpen } = this.state;
        const { lang } = this.props;

        return (
            <header id="header">
                <div className="container">
                    <Link to="/" className="logo">
                        <img src={imgLogo} alt="Logo" width="117" />
                    </Link>
                    <div className="burger-container" onClick={_.debounce(this.handleMenu, 150)}>
                        <div id="burger">
                            <div className="bar topBar" />
                            <div className="bar btmBar" />
                        </div>
                    </div>

                    <div id="menuSub">
                        <div id="chooseLanguage">
                            <ButtonDropdown isOpen={dropdownOpen} toggle={this.handleLangDropdown}>
                                <DropdownToggle className="languageCurr">
                                    <img src={langImg} alt="language" />
                                    <FontAwesomeIcon icon={faChevronDown} />
                                </DropdownToggle>
                                <DropdownMenu>
                                    {APP_LOCALES.length &&
                                        APP_LOCALES.map((item, key) => {
                                            return item.code !== lang ? (
                                                <DropdownItem key={key} onClick={() => this.selectedLanguage(item.code, item.imgSrc)}>
                                                    <img src={item.imgSrc} alt={item.name} />
                                                    <span>{item.name}</span>
                                                </DropdownItem>
                                            ) : null;
                                        })}
                                </DropdownMenu>
                            </ButtonDropdown>
                        </div>

                        {routes.length && (
                            <ul className="nav">
                                {routes.map((route, key) => {
                                    if (route.title === 'Whitepaper') {
                                        return (
                                            <li key={key}>
                                                <a href={whitepaper} target="_blank" rel="noopener noreferrer">
                                                    <FormattedMessage
                                                        id={`${langConfig.commNav}.${langConfig.whitepaper}`}
                                                        defaultMessage="Whitepaper"
                                                    />
                                                </a>
                                            </li>
                                        );
                                    }
                                    return (
                                        <Route key={key} path={route.path} exact={route.exact}>
                                            {({ match }) => {
                                                return (
                                                    <li className={match ? 'active' : null}>
                                                        <Link to={route.path}>
                                                            <FormattedMessage
                                                                id={`${langConfig.commNav}.${route.title.toLowerCase()}`}
                                                                defaultMessage={route.title}
                                                            />
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

Header.propTypes = {
    handleLanguage: PropTypes.func.isRequired,
    lang: PropTypes.string.isRequired
};

export default injectIntl(withRouter(Header));
