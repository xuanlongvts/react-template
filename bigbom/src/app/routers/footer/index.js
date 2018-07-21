import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import $ from 'jquery';

import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

class Footer extends PureComponent {
    constructor(props) {
        super(props);

        this.handleSlideUp = this.handleSlideUp.bind(this);
    }

    handleSlideUp() {
        $('body, html').animate({ scrollTop: 0 }, 300);
    }

    render() {
        return (
            <footer id="footer">
                <div className="container">
                    <span className="cycleSlider up" onClick={this.handleSlideUp}>
                        <FontAwesomeIcon icon={faAngleUp} />
                    </span>
                    <div className="list-brands">
                        <a
                            className="cycle-box tele"
                            href="https://t.me/bigbomicogroup"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={['fab', 'telegram-plane']} />
                        </a>
                        <a
                            className="cycle-box face"
                            href="https://www.facebook.com/bigbom.global/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                        </a>
                        <a
                            className="cycle-box link"
                            href="http://google.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
                        </a>
                        <a
                            className="cycle-box youtu"
                            href="https://www.youtube.com/channel/UCs6LAeB75nLLmHyQtGtl4uA"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={['fab', 'youtube']} />
                        </a>
                        <a
                            className="cycle-box git"
                            href="https://github.com/bigbomio"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={['fab', 'github']} />
                        </a>
                        <a
                            className="cycle-box twi"
                            href="https://twitter.com/bigbomglobal"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={['fab', 'twitter']} />
                        </a>
                    </div>
                    <div className="link-interm">
                        <a
                            href="https://bigbom.sgp1.digitaloceanspaces.com/files/landing-page/Bigbom-Limited-Privacy-Policy.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Privacy Policy
                        </a>
                        <span className="line-ver">|</span>
                        <a
                            href="https://bigbom.sgp1.digitaloceanspaces.com/files/landing-page/Bigbom-Ecosystem-Pre-ICO-Terms_draft.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Terms & Conditions
                        </a>
                        <span className="line-ver">|</span>
                        <Link to="/faq">FAQ</Link>
                    </div>
                    <div className="cpyRight">Copyright 2018 by Bigbom Eco All rights reserved.</div>
                </div>
            </footer>
        );
    }
}

export default Footer;
