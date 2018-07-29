import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import LazyLoad from 'react-lazyload';

import localStogeAdapter from '../../_utils/localStorage';
import dataBooks from '../../_data/dataBooks';
import Modal from '../_base/modal';
import { loadingOpen } from '../_base/loading/actions';
import { modalClose } from '../_base/modal/actions';
import { cartPay, cartRemove } from '../cart/actions';

class Confirm extends PureComponent {
    constructor(props) {
        super(props);

        this.handlePay = this.handlePay.bind(this);
        this.handleModal = this.handleModal.bind(this);
    }

    handlePay() {
        const { loadingOpen, cartPay } = this.props;
        loadingOpen();
        cartPay();
    }

    handleModal() {
        const { modalClose, cartRemove } = this.props;
        modalClose();

        localStogeAdapter.removeItem('carts');
        cartRemove();

        window.location.href = '/';
    }

    render() {
        const {
            inforCus: { fullname, email, phone, address },
            carts
        } = this.props;

        // const { carts } = this.props;
        // const { fullname, email, phone, address } = { fullname: 'aaa', email: 'aaa', phone: 'aaa', address: 'aaa' };

        return (
            <div className="container">
                <h2 className="titlePage">Confirm</h2>

                <div className="row">
                    <div className="col-sm-12 col-lg-5">
                        <div className="boxInfor customer">
                            <h3>Ship to</h3>
                            <p>
                                <strong>Full name: </strong>
                                <span>{fullname}</span>
                            </p>
                            <p>
                                <strong>Email: </strong>
                                <span>{email}</span>
                            </p>
                            <p>
                                <strong>Phone: </strong>
                                <span>{phone}</span>
                            </p>
                            <p>
                                <strong>Address: </strong>
                                <span>{address}</span>
                            </p>
                        </div>
                        <div className="boxInfor products">
                            <h3>Your orders ({carts.length} Items)</h3>
                            <div className="listProBuy">
                                {dataBooks.map(book => {
                                    return carts.map((item, key) => {
                                        if (book.id === parseInt(item.id, 10)) {
                                            return (
                                                <div className="item" key={key}>
                                                    <div className="img">
                                                        <LazyLoad height={200} offset={200} once>
                                                            <img src={book.img} alt={book.title} width={100} />
                                                        </LazyLoad>
                                                    </div>
                                                    <div className="infor">
                                                        <div className="title">{book.title}</div>
                                                        <div className="qty">
                                                            qty. <strong>{item.quantity}</strong>
                                                        </div>
                                                        <div className="price">
                                                            $. <strong>{book.price}</strong>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        }
                                        return null;
                                    });
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-7">
                        <div className="boxInfor">
                            <div className="eachMethod">
                                <label className="roundMethod" onClick={this.hadleChooseMethod}>
                                    <input type="radio" name="payMethod" id="pay-cash" defaultChecked />
                                    <span htmlFor="pay-cash">Cash on Delivery 25.000</span>
                                </label>
                            </div>
                            <div className="eachMethod">
                                <label className="roundMethod" onClick={this.hadleChooseMethod}>
                                    <input type="radio" name="payMethod" id="pay-credit" />
                                    <span htmlFor="pay-credit">Credit/Debit Card</span>
                                </label>
                            </div>
                        </div>

                        <button className="btn btn-danger" onClick={this.handlePay}>
                            PAY
                        </button>
                    </div>
                </div>

                <Modal handleModal={this.handleModal} />
            </div>
        );
    }
}

Confirm.propTypes = {
    inforCus: PropTypes.object.isRequired,
    carts: PropTypes.array.isRequired,
    loadingOpen: PropTypes.func.isRequired,
    modalClose: PropTypes.func.isRequired,
    cartPay: PropTypes.func.isRequired,
    cartRemove: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
};

const mapStateToProps = state => {
    return {
        carts: state.reducCart.getIn(['carts', 'listCarts']).toJS()
    };
};

const mapDispatchToProps = {
    loadingOpen,
    modalClose,
    cartPay,
    cartRemove
};

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Confirm)
);
