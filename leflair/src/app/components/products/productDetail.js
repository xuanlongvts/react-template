import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';

import { requestAddToCart } from '../cart/actions';

import localStogeAdapter from '../../_utils/localStorage';
import dataBooks from '../../_data/dataBooks';

class ProductDetail extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            reRender: 0
        };
    }

    handleCart(id) {
        let { reRender } = this.state;
        const { requestAddToCart } = this.props;

        const quantityBuy = 1;
        let stock = 0;
        let stockLeft = null;

        let dataBooksStore = null;
        localStogeAdapter.getItemJson('dataBooks')
            ? (dataBooksStore = localStogeAdapter.getItemJson('dataBooks'))
            : (dataBooksStore = dataBooks);

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

        localStogeAdapter.setItemJson('dataBooks', dataBooksStore);

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
        const { idproduct } = match.params;

        let dataBooksStore = null;
        localStogeAdapter.getItemJson('dataBooks')
            ? (dataBooksStore = localStogeAdapter.getItemJson('dataBooks'))
            : (dataBooksStore = dataBooks);

        return (
            <div className="container prodList">
                {dataBooksStore.length &&
                    dataBooksStore.map(item => {
                        if (item.id === parseInt(idproduct, 10)) {
                            let classButtonBuy = 'btn btn-danger';
                            let isBuy = true;
                            let stock = null;
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
                                <div className="row detailProd" key={idproduct}>
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
    match: PropTypes.object.isRequired
};

const mapDispatchToProps = {
    requestAddToCart
};

export default connect(
    null,
    mapDispatchToProps
)(ProductDetail);
