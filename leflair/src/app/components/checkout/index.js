import React, { PureComponent } from 'react';
import Form from './form';
import Confirm from './confirm';

class Checkout extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            isSuccess: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(data) {
        this.setState({
            isSuccess: true
        });
    }

    render() {
        const { isSuccess } = this.state;

        return <div id="checkoutPage">{!isSuccess ? <Form onSubmit={this.handleSubmit} /> : <Confirm />}</div>;
    }
}

export default Checkout;
