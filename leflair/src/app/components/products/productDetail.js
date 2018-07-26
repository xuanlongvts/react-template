import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';

import Helmet from '../../_utils/helmet';
import { requestAddToCart, updateCartItemOne } from '../cart/actions';

import dataBooks from '../../_data/dataBooks';

class ProductDetail extends PureComponent {
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
        const { idproduct } = match.params;

        return (
            <div className="container prodList">
                <Helmet title="Product detail" description="Product detail" />
                {dataBooks.map(item => {
                    if (parseInt(idproduct, 10) === item.id) {
                        let stock = null;
                        let classButtonBuy = 'btn btn-danger';
                        let isBuy = true;

                        if (item.stock < 3) {
                            stock = <span className="stock">Stock: {item.stock}</span>;
                        }

                        carts.length &&
                            carts.map(itemCart => {
                                if (parseInt(idproduct, 10) === itemCart.id) {
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
                            <div className="row detailProd" key={Math.random()}>
                                <div className="col-sm-12 col-md-5">
                                    <div className="img">
                                        <img src={item.img} alt={item.title} />
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-7">
                                    <h5 className="title">{item.title}</h5>
                                    <div className="des">{item.des}</div>

                                    <div className="price-stock">
                                        <span className="price">$ {item.price}</span>
                                        {stock}
                                    </div>

                                    {isBuy && (
                                        <button
                                            type="button"
                                            className={classButtonBuy}
                                            onClick={_.debounce(() => this.handleCart(item.id), 150)}
                                        >
                                            Buy now
                                        </button>
                                    )}
                                </div>
                            </div>
                        );
                    }
                    return null;
                })}
            </div>
        );
    }
}

ProductDetail.propTypes = {
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
)(ProductDetail);
