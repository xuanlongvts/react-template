import React, { PureComponent } from 'react';
import Form from './form';
import Confirm from './confirm';

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

        return <div id="checkoutPage">{!isSuccess ? <Form onSubmit={this.handleSubmit} /> : <Confirm inforCus={inforCus} />}</div>;
    }
}

export default Checkout;
