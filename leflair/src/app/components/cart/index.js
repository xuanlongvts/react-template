'use strict';

import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import dataBooks from '../../_data/dataBooks';
import { addDots } from '../../_utils/func';
import { updateCartItemOne } from './actions';

class Cart extends PureComponent {
    handleUpdateCart(unit, index) {
        const { updateCartItemOne } = this.props;

        updateCartItemOne(unit, index);
    }

    render() {
        const { carts } = this.props;

        const cartItemsList =
            dataBooks.length &&
            dataBooks.map(each => {
                return carts.map((item, key) => {
                    if (each.id === item.id) {
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
                                    <div className="btn-group">
                                        <button
                                            className="btn btn-secondary"
                                            onClick={item.quantity > 1 ? () => this.handleUpdateCart(-1, key) : null}
                                        >
                                            {' '}
                                            -{' '}
                                        </button>
                                        <button className="btn btn-secondary" onClick={() => this.handleUpdateCart(1, key)}>
                                            {' '}
                                            +{' '}
                                        </button>
                                        <span> </span>
                                        <button className="btn btn-danger"> DELETE </button>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                });
            });

        return (
            <div id="cartPage">
                <div className="container">
                    <h2 className="titlePage">Cart</h2>
                    {cartItemsList}
                </div>

                <div className="container">
                    <hr />
                    <h6 className="totalAmount">
                        <span>Total amount:</span> $. <strong>{addDots(3)}</strong>
                    </h6>
                    <button className="btn btn-success"> PROCEED TO CHECKOUT </button>
                </div>
            </div>
        );
    }
}

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
