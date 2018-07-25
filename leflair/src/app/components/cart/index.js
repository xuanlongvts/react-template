import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import $ from 'jquery';

import localStogeAdapter from '../../_utils/localStorage';
import dataBooks from '../../_data/dataBooks';
import { updateCartItemOne, closeCart } from './actions';

class Cart extends PureComponent {
    constructor(props) {
        super(props);

        this.handleCloseCart = this.handleCloseCart.bind(this);
    }

    componentDidMount() {
        $('body').on('click', '.overlay', () => {
            this.handleCloseCart();
        });
    }

    handleUpdateCart(id, unit, stock, index) {
        const { updateCartItemOne } = this.props;

        updateCartItemOne(unit, stock, index);

        let stockLeft = null;
        let dataBooksStore = null;
        localStogeAdapter.getItemJson('dataBooks')
            ? (dataBooksStore = localStogeAdapter.getItemJson('dataBooks'))
            : (dataBooksStore = dataBooks);

        dataBooksStore.length &&
            dataBooksStore.map(item => {
                if (item.id === id) {
                    item.quantity = item.quantity + unit;

                    stockLeft = item.stock - item.quantity;
                    item.stockLeft = stockLeft;
                }

                return null;
            });

        localStogeAdapter.setItemJson('dataBooks', dataBooksStore);
    }

    handleCloseCart() {
        const { closeCart } = this.props;

        closeCart();
        $('body').removeClass('openCart');
        $('.overlay').remove();
    }

    render() {
        const { carts, isOpen, quantity } = this.props;

        let dataBooksStore = localStogeAdapter.getItemJson('dataBooks') ? localStogeAdapter.getItemJson('dataBooks') : dataBooks;

        if (!isOpen) {
            return null;
        }

        let totalMoney = 0;
        const cartItemsList =
            dataBooksStore.length &&
            dataBooksStore.map(each => {
                return carts.map((item, key) => {
                    if (each.id === item.id) {
                        let eachItem = item.quantity * each.price;
                        totalMoney = totalMoney + eachItem;

                        return (
                            <div className="row eachRow" key={key}>
                                <div className="container">
                                    <hr />
                                </div>

                                <div className="col-sm-12 col-md-4">
                                    <h6>{each.title}</h6>
                                </div>
                                <div className="col-sm-12 col-md-2">
                                    <h6>$. {each.price}</h6>
                                </div>
                                <div className="col-sm-12 col-md-2">
                                    <h6>
                                        qty. <span className="badge badge-success">{item.quantity}</span>
                                    </h6>
                                </div>
                                <div className="col-sm-12 col-md-4">
                                    <div className="list-btn">
                                        {item.quantity > 1 && (
                                            <button
                                                className="btn btn-secondary"
                                                onClick={() => this.handleUpdateCart(item.id, -1, -1, key)}
                                            >
                                                -
                                            </button>
                                        )}
                                        {item.stockLeft > 0 && (
                                            <button className="btn btn-secondary" onClick={() => this.handleUpdateCart(item.id, 1, 1, key)}>
                                                +
                                            </button>
                                        )}
                                        <button className="btn btn-info btn-delete">DELETE</button>
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
                        <span>Total amount:</span> $. <strong>{totalMoney}</strong>
                    </h6>
                    <button className="btn btn-success"> PROCEED TO CHECKOUT </button>
                </div>
            </div>
        );
    }
}

Cart.propTypes = {
    updateCartItemOne: PropTypes.func.isRequired,
    carts: PropTypes.array.isRequired,
    quantity: PropTypes.number.isRequired,
    isOpen: PropTypes.bool.isRequired,
    closeCart: PropTypes.func.isRequired
};

const mapStateToProps = state => {
    return {
        carts: state.reducCart.getIn(['carts', 'listCarts']).toJS(),
        quantity: state.reducCart.getIn(['carts', 'quantityTotal']),
        isOpen: state.reducCart.get('isOpen')
    };
};

const mapDispatchToProps = {
    updateCartItemOne,
    closeCart
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart);
