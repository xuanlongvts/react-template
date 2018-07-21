import React, { PureComponent } from 'react';
import Slider from 'react-slick';
import LazyLoad from 'react-lazyload';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlane,
    faHeart,
    faSmile,
    faGift,
    faDollarSign,
    faAngleRight,
    faAngleLeft
} from '@fortawesome/free-solid-svg-icons';
import { faFly } from '@fortawesome/free-brands-svg-icons';

import CareersPosition from './carees-position';

import eventCareer from '../../../images/event-career.jpg';
import imgCareers from '../../../images/bannerTitle/careers.png';
import careerIntro1 from '../../../images/career-intro-1.jpg';
import careerIntro21 from '../../../images/career-intro-2.1.jpg';
import careerIntro22 from '../../../images/career-intro-2.2.jpg';
import careerIntro31 from '../../../images/career-intro-3.1.jpg';
import careerIntro32 from '../../../images/career-intro-3.2.jpg';
import careerIntro41 from '../../../images/career-intro-4.1.jpg';
import careerIntro42 from '../../../images/career-intro-4.2.jpg';
import Member from './members';

function RenderNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <button className={className} style={{ ...style, display: 'block' }} onClick={onClick}>
            <FontAwesomeIcon icon={faAngleRight} />
        </button>
    );
}

function RenderPrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <button className={className} style={{ ...style, display: 'block' }} onClick={onClick}>
            <FontAwesomeIcon icon={faAngleLeft} />
        </button>
    );
}

class Careers extends PureComponent {
    componentDidMount() {
        this.onResponsive();
        window.addEventListener('resize', this.onResponsive);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.onResponsive);
    }

    onResponsive() {
        let width = '25%';
        const elements = document.getElementsByClassName('column');
        const windowWidth = window.innerWidth;
        if (windowWidth < 321) {
            width = '100%';
        } else if (windowWidth < 769) {
            width = '50%';
        } else {
            width = '25%';
        }
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.msFlex = width; // IE10
            elements[i].style.flex = width;
        }
    }

    render() {
        const settings = {
            dots: false,
            infinite: false,
            speed: 300,
            lazyLoad: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <RenderNextArrow />,
            prevArrow: <RenderPrevArrow />
        };

        return (
            <React.Fragment>
                <div className="bannerTitle">
                    <div className="container">
                        <div className="title">
                            <LazyLoad height={200} offset={100} once>
                                <img src={imgCareers} alt="careers" />
                            </LazyLoad>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <section className="intro">
                        <h1>
                            Working <span>together</span>
                        </h1>
                        <div className="txt-intro">
                            We’re extending invitations to join our Bigbom Eco Come and make a difference with us!
                        </div>
                        <button className="buttonGreen">See open positions</button>
                        <div className="intro-grid-images-row">
                            <div className="column first">
                                <img src={careerIntro1} width="100%" alt="" />
                            </div>
                            <div className="column">
                                <img src={careerIntro21} width="100%" alt="" />
                                <img src={careerIntro22} width="100%" alt="" />
                            </div>
                            <div className="column">
                                <img src={careerIntro31} width="100%" alt="" />
                                <img src={careerIntro32} width="100%" alt="" />
                            </div>
                            <div className="column last">
                                <img src={careerIntro41} width="100%" alt="" />
                                <img src={careerIntro42} width="100%" alt="" />
                            </div>
                        </div>
                    </section>
                </div>

                <hr className="block-line" />

                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-lg-5">
                            <section className="benifits">
                                <h3 className="title block-title">
                                    Our core <span>values</span>
                                </h3>
                                <div className="block-description">
                                    At Bigbom Eco, we don’t just accept difference - we celebrate it, we support it, and
                                    we thrive on it for the benefit of our employees, our products, and our community
                                </div>
                                <div className="listBenifits">
                                    <ul>
                                        <li>Fast growing company</li>
                                        <li>Great Colleagues</li>
                                        <li>Take Charge</li>
                                        <li>Don’t stop learning</li>
                                        <li>Latest technology</li>
                                        <li>Cross domain exposure</li>
                                    </ul>
                                </div>
                            </section>
                        </div>
                        <div className="col-sm-12 col-lg-7 block-img">
                            <img src={eventCareer} alt="Our core value" />
                        </div>
                    </div>
                </div>

                <hr className="block-line" />

                <div className="container career-benifits">
                    <div className="row">
                        <div className="col-sm-12 col-lg-12">
                            <section className="benifits">
                                <h3 className="title block-title">
                                    Our <span>benefits</span>
                                </h3>
                                <div className="block-description">
                                    The passion and commitment to that mission lives through everything we do.
                                </div>
                                <div className="listBenifits">
                                    <ul>
                                        <li className="col-sm-12 col-lg-4">
                                            <span className="icon">
                                                <FontAwesomeIcon icon={['fas', 'heart']} />
                                            </span>
                                            Social insurance, health insurance will be applied legally
                                        </li>
                                        <li className="col-sm-12 col-lg-4">
                                            <span className="icon">
                                                <FontAwesomeIcon icon={['fab', 'fly']} />
                                            </span>Annual company trip, weekly teambuilding activities
                                        </li>
                                        <li className="col-sm-12 col-lg-4">
                                            <span className="icon">
                                                <FontAwesomeIcon icon={['fas', 'gift']} />
                                            </span>Bonus with ICO success
                                        </li>
                                        <li className="col-sm-12 col-lg-4">
                                            <span className="icon">
                                                <FontAwesomeIcon icon={['fas', 'dollar-sign']} />
                                            </span>13th monthly salary
                                        </li>
                                        <li className="col-sm-12 col-lg-4">
                                            <span className="icon">
                                                <FontAwesomeIcon icon={['fas', 'plane']} />
                                            </span>Oversea business trips
                                        </li>
                                        <li className="col-sm-12 col-lg-4">
                                            <span className="icon">
                                                <FontAwesomeIcon icon={['fas', 'smile']} />
                                            </span>Young and dynamics working environment with open working space
                                        </li>
                                    </ul>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>

                <CareersPosition />
                <section className="listStaffs">
                    <div className="container">
                        <Slider {...settings}>
                            {Member.length &&
                                Member.map((item, key) => {
                                    return (
                                        <div className="staffEach" key={key}>
                                            <div className="avatar">
                                                <img src={item.avatar} alt={item.name} height="200" />
                                            </div>
                                            <p className="des">{item.description}</p>
                                            <p className="name-title">
                                                <strong>{item.name}</strong>
                                                <span> - {item.position}</span>
                                            </p>
                                        </div>
                                    );
                                })}
                        </Slider>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Careers;
