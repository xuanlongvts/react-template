import React, { PureComponent } from 'react';
import Form from './form';
import Confirm from './confirm';
import Helmet from '../../_utils/helmet';

class Checkout extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            isSuccess: false,
            inforCus: null
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(data) {
        const inforCus = {
            fullname: data.fullname,
            email: data.email,
            phone: data.phone,
            address: data.address
        };

        this.setState({
            isSuccess: true,
            inforCus
        });
    }

    render() {
        const { isSuccess, inforCus } = this.state;

        return (
            <div id="checkoutPage">
                <Helmet title="Checkout" description="checkout page" />
                {!isSuccess ? <Form onSubmit={this.handleSubmit} /> : <Confirm inforCus={inforCus} />}
            </div>
        );
    }
}

export default Checkout;
