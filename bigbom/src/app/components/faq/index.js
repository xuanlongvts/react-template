import React, { PureComponent } from 'react';
import LazyLoad from 'react-lazyload';
import $ from 'jquery';

import Helmet from '../../_utils/helmet';

import data from './data';
import imgFaqs from '../../../images/bannerTitle/faq.png';

class Faq extends PureComponent {
    componentDidMount() {
        $('.listItem .title').click(function() {
            $('.listItem .title').removeClass('curr');
            $(this).addClass('curr');

            $('body, html').animate({ scrollTop: $(this).offset().top - 80 }, 300);
        });
    }

    render() {
        return (
            <div id="faqs">
                <Helmet />
                <div className="bannerTitle">
                    <div className="container">
                        <div className="title">
                            <LazyLoad height={200} offset={200} once>
                                <img src={imgFaqs} alt="faqs" />
                            </LazyLoad>
                        </div>
                    </div>
                </div>

                <section className="list-faqs">
                    <div className="container">
                        <div className="listItem">
                            {data.length &&
                                data.map((item, key) => {
                                    return (
                                        <div className="each-item" key={key}>
                                            <h2 className={`title ${key === 0 ? 'curr' : null}`}>{item.title}</h2>
                                            <div className="content">
                                                {item.content.length &&
                                                    item.content.map((itemC, index) => {
                                                        return (
                                                            <div className="inner" key={index}>
                                                                {itemC.h4 && <h4>{itemC.h4}</h4>}
                                                                {itemC.p && <p>{itemC.p}</p>}
                                                            </div>
                                                        );
                                                    })}
                                            </div>
                                        </div>
                                    );
                                })}
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Faq;
