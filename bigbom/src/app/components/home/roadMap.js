import React, { PureComponent } from 'react';
import Slider from 'react-slick';
import { phone, tablet, desktop, wideDesktop } from '../../_utils/func';

class roadMap extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            year: 2008
        };
    }

    handleTab(yearParam) {
        const { year } = this.state;
        yearParam !== year &&
            this.setState({
                year: yearParam
            });
    }

    render() {
        const { year } = this.state;
        const settingCarousel = {
            dots: false,
            infinite: false,
            speed: 300,
            slidesToShow: 8,
            slidesToScroll: 4,
            responsive: [
                {
                    breakpoint: wideDesktop,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 5
                    }
                },
                {
                    breakpoint: desktop,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4
                    }
                },
                {
                    breakpoint: tablet,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                },
                {
                    breakpoint: phone,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                }
            ]
        };

        return (
            <section id="roadmap">
                <div className="container">
                    <h2 className="title">Roadmap</h2>
                    <div className="listPeriod">
                        <span className={`year ${year === 2008 ? 'curr' : ''}`} onClick={() => this.handleTab(2008)}>
                            2018
                        </span>
                        <span className={`year ${year === 2009 ? 'curr' : ''}`} onClick={() => this.handleTab(2009)}>
                            2019
                        </span>
                    </div>
                </div>
                <div className="listPoints">
                    <div className="container">
                        <Slider {...settingCarousel}>
                            <div className="each-point">
                                <span className="cycle">&nbsp;</span>
                                <div className="boxDesc">
                                    <h4 className="date">Date title</h4>
                                    <div className="des">Lorem Ipsum is simply dummy text of the printing</div>
                                </div>
                            </div>
                            <div className="each-point">
                                <span className="cycle">&nbsp;</span>
                                <div className="boxDesc">
                                    <h4 className="date">Date title</h4>
                                    <div className="des">Lorem Ipsum is simply dummy text of the printing</div>
                                </div>
                            </div>
                            <div className="each-point">
                                <span className="cycle">&nbsp;</span>
                                <div className="boxDesc">
                                    <h4 className="date">Date title</h4>
                                    <div className="des">Lorem Ipsum is simply dummy text of the printing</div>
                                </div>
                            </div>
                            <div className="each-point curr">
                                <span className="cycle">&nbsp;</span>
                                <div className="boxDesc">
                                    <h4 className="date">Date title</h4>
                                    <div className="des">Lorem Ipsum is simply dummy text of the printing</div>
                                </div>
                            </div>
                            <div className="each-point">
                                <span className="cycle future">&nbsp;</span>
                                <div className="boxDesc">
                                    <h4 className="date">Date title</h4>
                                    <div className="des">Lorem Ipsum is simply dummy text of the printing</div>
                                </div>
                            </div>
                            <div className="each-point">
                                <span className="cycle future">&nbsp;</span>
                                <div className="boxDesc">
                                    <h4 className="date future">Date title</h4>
                                    <div className="des">Lorem Ipsum is simply dummy text of the printing</div>
                                </div>
                            </div>
                            <div className="each-point">
                                <span className="cycle future">&nbsp;</span>
                                <div className="boxDesc">
                                    <h4 className="date">Date title</h4>
                                    <div className="des">Lorem Ipsum is simply dummy text of the printing</div>
                                </div>
                            </div>
                            <div className="each-point">
                                <span className="cycle future">&nbsp;</span>
                                <div className="boxDesc">
                                    <h4 className="date">Date title</h4>
                                    <div className="des">Lorem Ipsum is simply dummy text of the printing</div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
        );
    }
}

export default roadMap;
