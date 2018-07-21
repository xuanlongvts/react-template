import React from 'react';
import LazyLoad from 'react-lazyload';

import imgCustomer from '../../../images/customer.png';
import imgApp from '../../../images/app.png';
import imgSmartcontract from '../../../images/smartcontract.png';
import imgBlockchain from '../../../images/blockchain.png';

const echoLayer = () => {
    return (
        <section id="echoLayer">
            <div className="container">
                <h2 className="title">Bigbom Eco Layered Architecure</h2>
                <div className="each-box customer">
                    <div className="box-des">
                        <h5>Customer</h5>
                        <p>
                            {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                            a galley of type and scrambled it to make a type specimen book.`}
                        </p>
                    </div>
                    <LazyLoad height={200} offset={100} once>
                        <img src={imgCustomer} alt="customer" />
                    </LazyLoad>
                </div>
                <div className="each-box application">
                    <div className="box-des">
                        <h5>Application Ecosystem</h5>
                        <p>
                            {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                            a galley of type and scrambled it to make a type specimen book.`}
                        </p>
                    </div>
                    <LazyLoad height={200} offset={100} once>
                        <img src={imgApp} alt="app" />
                    </LazyLoad>
                </div>
                <div className="each-box smart">
                    <div className="box-des">
                        <h5>Smart Contracts</h5>
                        <p>
                            {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                            a galley of type and scrambled it to make a type specimen book.`}
                        </p>
                    </div>
                    <LazyLoad height={200} offset={100} once>
                        <img src={imgSmartcontract} alt="smart contracts" />
                    </LazyLoad>
                </div>
                <div className="each-box blockchain">
                    <div className="box-des">
                        <h5>Multi-chain Support</h5>
                        <p>
                            {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                            a galley of type and scrambled it to make a type specimen book.`}
                        </p>
                    </div>
                    <LazyLoad height={200} offset={100} once>
                        <img src={imgBlockchain} alt="blockchain" />
                    </LazyLoad>
                </div>
            </div>
        </section>
    );
};

export default echoLayer;
