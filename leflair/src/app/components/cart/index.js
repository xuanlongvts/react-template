import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import $ from 'jquery';
import _ from 'lodash';

import { totalQuantity } from '../../_utils/func';
import dataBooks from '../../_data/dataBooks';
import { updateCartItemOne, updateCartItemMulti, deleteCartItem, closeCart } from './actions';

class Cart extends PureComponent {
    constructor(props) {
        super(props);

        this.handleCloseCart = this.handleCloseCart.bind(this);
        this.handleProcessCart = this.handleProcessCart.bind(this);
    }

    componentDidMount() {
        $('body').on('click', '.overlay', () => {
            this.handleCloseCart();
        });
    }

    handleUpdateCart(unit, stock, index) {
        const { updateCartItemOne } = this.props;

        updateCartItemOne(unit, stock, index);

        let getVal = parseInt($(`.quantityChange.num${index}`).val(), 10);
        $(`.quantityChange.num${index}`).val(getVal + unit);
    }

    handleCloseCart() {
        const { closeCart } = this.props;

        closeCart();
        $('body').removeClass('openCart');
        $('.overlay').remove();
    }

    handleKeyUpQuantity(maxQuantity, e) {
        let getValue = parseInt(e.target.value, 10);

        if (_.isNaN(getValue)) {
            e.target.value = 1;
        }
        if (getValue > parseInt(maxQuantity, 10)) {
            e.target.value = maxQuantity;
        }
    }

    handleBlurQuantity(e, index) {
        var getValue = e.target.value;
        const { updateCartItemMulti } = this.props;

        updateCartItemMulti(getValue, index);
    }

    handleDeleteCart(index) {
        const { deleteCartItem } = this.props;

        deleteCartItem(index);
    }

    handleProcessCart() {
        this.handleCloseCart();
    }

    render() {
        const { carts, isOpen } = this.props;
        let quantity = totalQuantity(carts);

        if (!isOpen) {
            return null;
        }

        let totalMoney = 0;
        const cartItemsList = dataBooks.map(each => {
            return carts.map((item, key) => {
                if (each.id === item.id) {
                    let eachItem = item.quantity * each.price;
                    totalMoney = totalMoney + eachItem;

                    let stock = null;
                    let stockLeft = parseInt(each.stock, 10) - parseInt(item.quantity, 10);

                    if (stockLeft <= 0) {
                        stock = <span className="stock">Out of stock</span>;
                    } else if (stockLeft < 3) {
                        stock = <span className="stock">Stock: {stockLeft}</span>;
                    }

                    return (
                        <div className="row eachRow" key={key}>
                            <div className="container">
                                <hr />
                            </div>

                            <div className="col-sm-12 col-lg-4">
                                <div className="title">{each.title}</div>
                            </div>
                            <div className="col-sm-12 col-lg-1">
                                <div className="price">$. {each.price}</div>
                            </div>
                            <div className="col-sm-12 col-lg-4">
                                <div className="quantity">
                                    qty.
                                    <input
                                        type="number"
                                        className={`quantityChange num${key}`}
                                        min={1}
                                        max={each.stock}
                                        defaultValue={item.quantity}
                                        onKeyUp={e => this.handleKeyUpQuantity(each.stock, e)}
                                        onBlur={e => this.handleBlurQuantity(e, key)}
                                    />
                                    {stock}
                                </div>
                            </div>
                            <div className="col-sm-12 col-lg-3">
                                <div className="list-btn">
                                    {item.quantity > 1 && (
                                        <button className="btn btn-secondary" onClick={() => this.handleUpdateCart(-1, -1, key)}>
                                            -
                                        </button>
                                    )}
                                    {each.stock - item.quantity > 0 && (
                                        <button className="btn btn-secondary" onClick={() => this.handleUpdateCart(1, 1, key)}>
                                            +
                                        </button>
                                    )}
                                    <button className="btn btn-info btn-delete" onClick={() => this.handleDeleteCart(key)}>
                                        DELETE
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                }
                return null;
            });
        });

        return (
            <div id="cartPage">
                <div className="container">
                    <button type="button" id="btn-close" onClick={this.handleCloseCart}>
                        X
                    </button>

                    <h2 className="titlePage">
                        your cart <span className="numberCart">{quantity}</span>
                    </h2>
                    {cartItemsList}
                </div>

                <div className="container">
                    <hr className="hrTotal" />
                    <h6 className="totalAmount">
                        <span>Total amount:</span>
                        <span className="color-red totalMoney">
                            $. <strong>{totalMoney}</strong>
                        </span>
                    </h6>
                    <button className="btn btn-success">
                        <Link to="/checkout" onClick={this.handleProcessCart}>
                            {' '}
                            PROCEED TO CHECKOUT{' '}
                        </Link>
                    </button>
                </div>
            </div>
        );
    }
}

Cart.propTypes = {
    updateCartItemOne: PropTypes.func.isRequired,
    updateCartItemMulti: PropTypes.func.isRequired,
    deleteCartItem: PropTypes.func.isRequired,
    carts: PropTypes.array.isRequired,
    isOpen: PropTypes.bool.isRequired,
    closeCart: PropTypes.func.isRequired
};

const mapStateToProps = state => {
    return {
        carts: state.reducCart.getIn(['carts', 'listCarts']).toJS(),
        isOpen: state.reducCart.get('isOpen')
    };
};

const mapDispatchToProps = {
    updateCartItemOne,
    updateCartItemMulti,
    deleteCartItem,
    closeCart
};

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Cart)
);
