import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LazyLoad from 'react-lazyload';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import $ from 'jquery';

import { hanleEmailSent, modalMessClose } from './actions';
import { whitepaper } from '../../_utils/func';

import Helmet from '../../_utils/helmet';

import bigbomDigital from '../../../images/bigbom-digital.png';
import bigbomMarket from '../../../images/bigbom-market.png';

import RoadMap from './roadMap';
import EcoLayer from './ecoLayer';

import ListPersons from './listPersons';
import ListAdvisors from './listAdvisors';
import ListPartner from './listPartner';
import ListInvestors from './listInvestors';

import Modal from './modal';

class Home extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            isEmailSubmit: false
        };

        this.textInputEmail = React.createRef();
        this.handleEmail = this.handleEmail.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleModal = this.handleModal.bind(this);
    }

    componentDidMount() {
        $('.cycleSlider.down').click(() => {
            $('body, html').animate({ scrollTop: $('#our-products').offset().top - 100 }, 300);
        });
    }

    handleChangeEmail(e) {
        const pattenEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        let getEmail = e.target.value;
        if (pattenEmail.test(getEmail)) {
            this.setState({
                isEmailSubmit: true
            });
        } else {
            this.setState({
                isEmailSubmit: false
            });
        }
    }

    handleEmail() {
        const { isEmailSubmit } = this.state;
        const { hanleEmailSent } = this.props;
        const valEmail = this.textInputEmail.current.value;

        isEmailSubmit && hanleEmailSent(valEmail);

        this.textInputEmail.current.value = '';
        this.setState({
            isEmailSubmit: false
        });
    }

    handleKeyPress(e) {
        const { isEmailSubmit } = this.state;
        if (e.key === 'Enter' && isEmailSubmit) {
            this.handleEmail();
        }
    }

    handleModal() {
        const { modalMessClose } = this.props;
        modalMessClose();
    }

    render() {
        const { isEmailSubmit } = this.state;

        return (
            <div id="home">
                <Helmet />
                <div className="intro">
                    <div className="bgTmp">
                        <div className="container">
                            <div className="infor">
                                <h1>Bigbom Eco</h1>
                                <div className="intro-des">
                                    Bigbom Eco serves as a decentralized advertising ecosystem for all parties involved
                                    in online advertising, inclusive of advertisers, service providers, content
                                    publishers, advertising channels, platforms. Bigbom Eco is being developed using
                                    smart contract, running on Ethereum blockchain.
                                </div>
                                <a href={whitepaper} target="_blank" className="buttonGreen" rel="noopener noreferrer">
                                    Whitepaper
                                </a>
                            </div>
                            <div className="animate-intro">&nbsp;</div>

                            <span className="cycleSlider down" onClick={this.handleSlideUp}>
                                <FontAwesomeIcon icon={faAngleDown} />
                            </span>
                        </div>
                    </div>
                </div>

                <section id="our-products">
                    <div className="container">
                        <h2 className="title">Our Products</h2>
                        <div className="row">
                            <div className="col-12 col-lg-6">
                                <div className="each-box digital">
                                    <LazyLoad height={200} offset={100} once>
                                        <img src={bigbomDigital} alt="bigbom-digital" />
                                    </LazyLoad>
                                    <h3>Bigbom Digital Contract (TM)</h3>
                                    <div className="des">
                                        Managing your Ads Campaigns and payment using smart contracts. Fiat currencies
                                        supported
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6">
                                <div className="each-box market">
                                    <LazyLoad height={200} offset={100} once>
                                        <img src={bigbomMarket} alt="bigbom-marketplace" />
                                    </LazyLoad>
                                    <h3>Bigbom Marketplace</h3>
                                    <div className="des">
                                        An open marketplace for finding your digtal ads partner. Powered by Bigbom
                                        Digital Contract (TM) platform
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <RoadMap />
                <EcoLayer />

                <div className="container">
                    <section id="ourTeam">
                        <h2 className="title">Meet our team</h2>
                        <ListPersons />
                    </section>
                    <section id="outAdvisors">
                        <h2 className="title">Our advisors</h2>
                        <ListAdvisors />
                    </section>
                    <section id="partners">
                        <h2 className="title">Partners</h2>
                        <ListPartner />
                    </section>
                    <section id="investors">
                        <h2 className="title">Investors</h2>
                        <ListInvestors />
                    </section>
                </div>

                <section id="newsLetter">
                    <div className="container">
                        <h2 className="title">Newsletter</h2>
                        <div className="des">
                            Subscribing to our newsletter for receving latest news & updates from us !
                        </div>
                        <div className="box-mail">
                            <div className="fakeInput">
                                <input
                                    type="text"
                                    placeholder="Enter your email"
                                    ref={this.textInputEmail}
                                    onChange={this.handleChangeEmail}
                                    onKeyPress={this.handleKeyPress}
                                />
                                <button
                                    className={`buttonGreen ${!isEmailSubmit ? 'disabled' : ''}`}
                                    onClick={isEmailSubmit ? this.handleEmail : null}
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                <Modal handleModal={this.handleModal} />
            </div>
        );
    }
}

Home.propTypes = {
    hanleEmailSent: PropTypes.func.isRequired,
    modalMessClose: PropTypes.func.isRequired
};

const mapDispatchToProps = {
    hanleEmailSent,
    modalMessClose
};

export default connect(
    null,
    mapDispatchToProps
)(Home);
