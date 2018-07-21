import React, { PureComponent } from 'react';
import { Helmet } from 'react-helmet';

import { injectIntl, intlShape } from 'react-intl';
import * as langConfig from '../languages/translate/const';

import { page_news, page_team, page_careers, page_faq } from '../../routers/RoutersAuthen';

class HelmetComponent extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            title: null,
            description: null
        };

        this.intl = props.intl;
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        let getDefautPageTitle = langConfig.commTitleHome;
        let getDefautPageDes = langConfig.commDescriptionHome;
        let pathName = window.location.pathname;

        if (pathName.indexOf(page_news) > 0) {
            getDefautPageTitle = langConfig.commTitleNew;
            getDefautPageDes = langConfig.commDescriptionNew;
        } else if (pathName.indexOf(page_team) > 0) {
            getDefautPageTitle = langConfig.commTitleTeam;
            getDefautPageDes = langConfig.commDescriptionTeam;
        } else if (pathName.indexOf(page_careers) > 0) {
            getDefautPageTitle = langConfig.commTitleCareers;
            getDefautPageDes = langConfig.commDescriptionCareers;
        } else if (pathName.indexOf(page_faq) > 0) {
            getDefautPageTitle = langConfig.commTitleFaq;
            getDefautPageDes = langConfig.commDescriptionFaq;
        }

        const titleNext = nextProps.intl.messages[getDefautPageTitle];
        if (titleNext && titleNext !== prevState.title) {
            return {
                title: titleNext,
                description: nextProps.intl.messages[getDefautPageDes]
            };
        }

        return null;
    }

    render() {
        const { title, description } = this.state;

        return (
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
            </Helmet>
        );
    }
}

HelmetComponent.propTypes = {
    intl: intlShape.isRequired
};

export default injectIntl(HelmetComponent);
