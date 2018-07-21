import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { IntlProvider, addLocaleData } from 'react-intl';
import locale_en from 'react-intl/locale-data/en';
import locale_vi from 'react-intl/locale-data/vi';
import locale_ko from 'react-intl/locale-data/ko';
import locale_zh from 'react-intl/locale-data/zh';

import Header from './header';
import Footer from './footer';
import NotFound from '../components/NotFound';
import Loading from '../components/_base/loading';
import RoutersAuthen from './RoutersAuthen';

import languageAdapter from '../_utils/languages/services';
import { getLanguage, setLanguage } from '../_utils/languages/actions';

import lang_en from '../_utils/languages/translate/en';
import lang_vi from '../_utils/languages/translate/vi';
import lang_zh from '../_utils/languages/translate/zh';
import lang_ko from '../_utils/languages/translate/ko';

addLocaleData([...locale_en, ...locale_vi, ...locale_ko, ...locale_zh]);

const langAll = {
    en: lang_en,
    vi: lang_vi,
    zh: lang_zh,
    ko: lang_ko
};

class Routers extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            routes: RoutersAuthen
        };

        this.handleLanguage = this.handleLanguage.bind(this);

        const { getLanguage } = this.props;
        getLanguage();
    }

    handleLanguage(lang) {
        languageAdapter.language = lang;
        const { setLanguage } = this.props;
        setLanguage(lang);
    }

    render() {
        const { routes } = this.state;
        const { lang } = this.props;
        if (!lang) {
            return null;
        }
        return (
            <IntlProvider locale={lang} messages={langAll[lang]}>
                <BrowserRouter>
                    <div className="app">
                        <Header handleLanguage={this.handleLanguage} lang={lang} />

                        <Switch>
                            {routes.length && routes.map((route, key) => <Route key={key} {...route} />)}
                            <Route component={NotFound} />
                        </Switch>
                        <Footer />

                        <Loading />
                    </div>
                </BrowserRouter>
            </IntlProvider>
        );
    }
}

Routers.propTypes = {
    getLanguage: PropTypes.func.isRequired,
    setLanguage: PropTypes.func.isRequired,
    lang: PropTypes.string
};

const mapStateToProps = state => {
    return {
        lang: state.reducerLanguage.get('lang')
    };
};

const mapDispatchToProps = {
    getLanguage,
    setLanguage
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Routers);
