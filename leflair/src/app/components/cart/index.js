import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import dataBooks from '../../_data/dataBooks';
import { addDots } from '../../_utils/func';
import { updateCartItemOne } from './actions';

class Cart extends PureComponent {
    handleUpdateCart(unit, stock, index) {
        const { updateCartItemOne } = this.props;

        updateCartItemOne(unit, stock, index);
    }

    render() {
        const { carts } = this.props;
        let totalMoney = 0;

        const cartItemsList =
            dataBooks.length &&
            dataBooks.map(each => {
                return carts.map((item, key) => {
                    if (each.id === item.id) {
                        let eachItem = item.quantity * each.price;
                        totalMoney = totalMoney + eachItem;
                        return (
                            <div className="row eachRow" key={item.id}>
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
                                            <button className="btn btn-secondary" onClick={() => this.handleUpdateCart(-1, -1, key)}>
                                                -
                                            </button>
                                        )}
                                        {item.stockLeft > 0 && (
                                            <button className="btn btn-secondary" onClick={() => this.handleUpdateCart(1, 1, key)}>
                                                +
                                            </button>
                                        )}
                                        <button className="btn btn-danger btn-delete">DELETE</button>
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
                    <h2 className="titlePage">Cart</h2>
                    {cartItemsList}
                </div>

                <div className="container">
                    <hr className="hrTotal" />
                    <h6 className="totalAmount">
                        <span>Total amount:</span> $. <strong>{addDots(totalMoney)}</strong>
                    </h6>
                    <button className="btn btn-success"> PROCEED TO CHECKOUT </button>
                </div>
            </div>
        );
    }
}

Cart.propTypes = {
    updateCartItemOne: PropTypes.func.isRequired,
    carts: PropTypes.array.isRequired
};

const mapStateToProps = state => {
    return {
        carts: state.reducCart.getIn(['carts', 'listCarts']).toArray()
    };
};

const mapDispatchToProps = {
    updateCartItemOne
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart);
