import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import _ from 'lodash';
import dataBooks from '../../_data/dataBooks';

class ProductDetail extends PureComponent {
    render() {
        const { match } = this.props;
        const { idproduct } = match.params;

        return (
            <div className="container prodList">
                {dataBooks.length &&
                    dataBooks.map(item => {
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

                                        <button
                                            type="button"
                                            className={classButtonBuy}
                                            onClick={isBuy ? _.debounce(() => this.handleCart(item.id), 150) : null}
                                        >
                                            Buy now
                                        </button>
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
    match: PropTypes.object.isRequired
};

export default ProductDetail;
