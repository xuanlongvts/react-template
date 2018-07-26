import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import _ from 'lodash';

import { requestAddToCart, updateCartItemOne } from '../cart/actions';
import dataBooks from '../../_data/dataBooks';

class ProductList extends PureComponent {
    handleCart(id) {
        const { requestAddToCart, updateCartItemOne, carts } = this.props;

        let isUpdate = false;
        carts.length &&
            carts.some((item, key) => {
                if (item.id === id) {
                    updateCartItemOne(1, 1, key);
                    isUpdate = true;
                }
                return null;
            });

        const book = {
            id,
            quantity: 1
        };
        !isUpdate && requestAddToCart(book);
    }

    render() {
        const { match, carts } = this.props;

        return (
            <div className="container prodList">
                <h2 className="titlePage">Products list</h2>
                <div className="row">
                    {dataBooks.map(item => {
                        let stock = null;
                        let classButtonBuy = 'btn btn-danger';
                        let isBuy = true;
                        carts.length &&
                            carts.map(itemCart => {
                                if (item.id === itemCart.id) {
                                    let stockLeft = parseInt(item.stock, 10) - parseInt(itemCart.quantity, 10);

                                    if (stockLeft <= 0) {
                                        stock = <span className="stock">Out of stock</span>;
                                        classButtonBuy = 'btn btn-secondary';
                                        isBuy = false;

                                        return false;
                                    }

                                    if (stockLeft < 3) {
                                        stock = <span className="stock">Stock: {stockLeft}</span>;
                                    }
                                }
                                return null;
                            });

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
    updateCartItemOne: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired,
    carts: PropTypes.array.isRequired
};

const mapStateToProps = state => {
    return {
        carts: state.reducCart.getIn(['carts', 'listCarts']).toJS()
    };
};

const mapDispatchToProps = {
    requestAddToCart,
    updateCartItemOne
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductList);
