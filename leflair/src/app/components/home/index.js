'use strict';

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';
import dataBooks from '../../_data/dataBooks';

import { requestAddToCart } from '../cart/actions';

class Home extends PureComponent {
    constructor(props) {
        super(props);
    }

    handleCart(id) {
        const { requestAddToCart } = this.props;

        const book = {
            id,
            quantity: 1
        };

        requestAddToCart(book);
    }

    render() {
        return (
            <div id="homePage">
                <div className="container">
                    <h2 className="titlePage">List products</h2>
                    <div className="row">
                        {dataBooks.length &&
                            dataBooks.map(item => {
                                return (
                                    <div className="col-sm-12 col-md-6 col-lg-4" key={item.id}>
                                        <section className="item">
                                            <div className="img">
                                                <img src={item.img} alt={item.title} />
                                            </div>
                                            <div className="infor">
                                                <h4 className="title">{item.title}</h4>
                                                <div className="price">$ {item.price}</div>

                                                <button
                                                    type="button"
                                                    className="btn btn-danger btn-buy"
                                                    onClick={_.debounce(() => this.handleCart(item.id), 150)}
                                                >
                                                    Buy now
                                                </button>
                                            </div>
                                        </section>
                                    </div>
                                );
                            })}
                    </div>
                </div>
            </div>
        );
    }
}

Home.propTypes = {
    requestAddToCart: PropTypes.func.isRequired
};

const mapDispatchToProps = {
    requestAddToCart
};

export default connect(
    null,
    mapDispatchToProps
)(Home);
