import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CareersApply from './careers-apply';

class CareersDetails extends PureComponent {
    render() {
        return (
            <div id="careers-details">
                <div className="bannerTitle">
                    <div className="container">
                        <div className="title">
                            <Link to="/careers" className="back">
                                <FontAwesomeIcon icon={['fas', 'angle-left']} /> See All Jobs
                            </Link>
                            <span className="position">Blockchain Lead</span>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <section className="carrer-summary">
                        <div className="carrer-summary-info">
                            <FontAwesomeIcon icon={['fas', 'circle']} />{' '}
                            <span>
                                <strong>Salary: </strong>
                                {"You'll love"}
                            </span>
                        </div>
                        <div className="carrer-summary-info">
                            <FontAwesomeIcon icon={['fas', 'circle']} />{' '}
                            <span>
                                <strong>Salary review: </strong>
                                Once a year (October)
                            </span>
                        </div>
                        <div className="carrer-summary-info">
                            <FontAwesomeIcon icon={['fas', 'circle']} />{' '}
                            <span>
                                <strong>Probation salary: </strong>
                                {'100% monthly salary'}
                            </span>
                        </div>
                        <div className="carrer-summary-info">
                            <FontAwesomeIcon icon={['fas', 'circle']} />{' '}
                            <span>
                                <strong>Probation time: </strong>
                                {'2 months'}
                            </span>
                        </div>
                        <div className="carrer-summary-info">
                            <FontAwesomeIcon icon={['fas', 'circle']} />{' '}
                            <span>
                                <strong>Working hour: </strong>
                                {'9am-6pm (Noon: 90 mins)'}
                            </span>
                        </div>
                        <div className="carrer-summary-info">
                            <FontAwesomeIcon icon={['fas', 'circle']} />{' '}
                            <span>
                                <strong>Holiday: </strong>
                                {'Every Saturday & Sunday'}
                            </span>
                        </div>
                    </section>
                    <section className="carrer-address">
                        <div className="section-title">Address</div>
                        <div className="section-details">
                            <div>6th Floor, 137 Le Quang Dinh, Ward 14, Binh Thanh Dist, Hochiminh</div>
                        </div>
                    </section>
                    <section className="carrer-description">
                        <div className="section-title">Job Description</div>
                        <div className="section-details">
                            <div className="sd-row">
                                We are seeking an experienced Blockchain Lead with high enthusiasm in developing ICO smart contract system
                                while ensuring our fast-growing in cryptocurrency market.
                            </div>
                            <div className="sd-row">
                                <span className="sign">-</span>
                                <span className="pharse">
                                    Leading, planning the work flows and teams of developers to design and develop applications in Ethereum
                                    blockchain platform
                                </span>
                            </div>
                            <div className="sd-row">
                                <span className="sign">-</span>
                                <span className="pharse">Play in blockchain team as a leader and inspiration</span>
                            </div>
                            <div className="sd-row">
                                <span className="sign">-</span>
                                <span className="pharse">Having abilities in communication and technical documents contributions</span>
                            </div>
                            <div className="sd-row">
                                <span className="sign">-</span>
                                <span className="pharse">Be assistant of Manager Board in our business concept</span>
                            </div>
                            <div className="sd-row">
                                <span className="sign">-</span>
                                <span className="pharse">
                                    With customer-centric mindset you will have chance to work and coorporate with investors worldwide
                                </span>
                            </div>
                        </div>
                    </section>
                    <section className="carrer-requirement">
                        <div className="section-title">Job Requirement</div>
                        <div className="section-details">
                            <div className="sd-row">
                                <span className="sign">-</span>
                                <span className="pharse">
                                    Extensive knowledge about blockchain technology with Ethereum, Smart Contracts
                                </span>
                            </div>
                            <div className="sd-row">
                                <span className="sign">-</span>
                                <span className="pharse">At least 2 years experience as leader position in related field</span>
                            </div>
                            <div className="sd-row">
                                <span className="sign">-</span>
                                <span className="pharse">Advanced experience and knowledge in C++, Python, Java, Solidy</span>
                            </div>
                            <div className="sd-row">
                                <span className="sign">-</span>
                                <span className="pharse">Good understanding about the latest cryptocurrency exchange market</span>
                            </div>
                            <div className="sd-row">
                                <span className="sign">-</span>
                                <span className="pharse">Fluent in English</span>{' '}
                            </div>
                        </div>
                    </section>
                    <section className="carrer-benifit">
                        <div className="section-title">Benifits</div>
                        <div className="section-details">
                            <div>
                                <FontAwesomeIcon icon={['fas', 'heart']} />
                                <span>Social insurance, health insurance will be applied legally</span>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={['fab', 'fly']} />
                                <span>Annual company trip, weekly teambuilding activities</span>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={['fas', 'gift']} />
                                <span>Bonus with ICO success</span>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={['fas', 'dollar-sign']} />
                                <span>13th monthly salary</span>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={['fas', 'plane']} />
                                <span>Oversea business trips</span>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={['fas', 'smile']} />
                                <span>Young and dynamics working environment with open working space</span>
                            </div>
                        </div>
                    </section>
                    <section className="carrer-share">
                        <span className="share-label">Share this job:</span>
                        <span className="list-social">
                            <Button className="social social-linkedin">
                                <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
                            </Button>
                            <Button className="social social-twitter">
                                <FontAwesomeIcon icon={['fab', 'twitter']} />
                            </Button>
                            <Button className="social social-facebook">
                                <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                            </Button>
                        </span>
                    </section>
                    <section className="carrer-apply">
                        <div className="apply-title">Apply for this Job</div>
                        <CareersApply className="carrer-apply-form" submit={() => {}} />
                    </section>
                </div>
            </div>
        );
    }
}

export default CareersDetails;
