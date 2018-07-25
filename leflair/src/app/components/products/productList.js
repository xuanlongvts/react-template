import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import _ from 'lodash';

import { requestAddToCart } from '../cart/actions';
import dataBooks from '../../_data/dataBooks';

class ProductList extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            dataBooksStore: dataBooks,
            reRender: 0
        };
    }

    handleCart(id) {
        let { reRender } = this.state;
        const { dataBooksStore } = this.state;
        const { requestAddToCart } = this.props;

        const quantityBuy = 1;
        let stock = 0;
        let stockLeft = null;
        dataBooksStore.length &&
            dataBooksStore.map(item => {
                if (item.id === id) {
                    stock = item.stock;
                    if (_.isInteger(item.quantity)) {
                        item.quantity += 1;
                    } else {
                        item.quantity = quantityBuy;
                    }

                    stockLeft = item.stock - item.quantity;
                    item.stockLeft = stockLeft;
                }

                return null;
            });

        this.setState({
            reRender: ++reRender
        });

        const book = {
            id,
            stock,
            stockLeft,
            quantity: quantityBuy
        };

        requestAddToCart(book);
    }

    render() {
        const { match } = this.props;
        const { dataBooksStore } = this.state;

        return (
            <div className="container prodList">
                <h2 className="titlePage">Products list</h2>
                <div className="row">
                    {dataBooksStore.length &&
                        dataBooksStore.map(item => {
                            let stock = null;
                            let classButtonBuy = 'btn btn-danger';
                            let isBuy = true;
                            if (item.stock < 3) {
                                stock = <span className="stock">Stock: {item.stock}</span>;
                            }

                            if (_.isInteger(item.stockLeft)) {
                                if (item.stockLeft < 3 && item.stockLeft > 0) {
                                    stock = <span className="stock">Stock: {item.stockLeft}</span>;
                                } else if (item.stockLeft <= 0) {
                                    stock = <span className="stock">Out of stock</span>;
                                    classButtonBuy = 'btn btn-secondary';
                                    isBuy = false;
                                }
                            }

                            return (
                                <div className="col-sm-12 col-md-6 col-lg-4" key={item.id}>
                                    <section className="item">
                                        <Link to={`${match.url}/${item.id}`} key={item.id}>
                                            <div className="img">
                                                <img src={item.img} alt={item.title} />
                                            </div>
                                            <div className="infor">
                                                <h4 className="title">{item.title}</h4>
                                                <div className="price-stock">
                                                    <span className="price">$ {item.price}</span>
                                                    {stock}
                                                </div>
                                            </div>
                                        </Link>
                                        <button
                                            type="button"
                                            className={classButtonBuy}
                                            onClick={isBuy ? _.debounce(() => this.handleCart(item.id), 150) : null}
                                        >
                                            Buy now
                                        </button>
                                    </section>
                                </div>
                            );
                        })}
                </div>
            </div>
        );
    }
}

ProductList.propTypes = {
    requestAddToCart: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired
};

const mapDispatchToProps = {
    requestAddToCart
};

export default connect(
    null,
    mapDispatchToProps
)(ProductList);
