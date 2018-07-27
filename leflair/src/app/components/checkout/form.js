import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import validate, { customerInfo } from './validate';

const renderField = ({ input, id, label, type, valueDefault, isFill, meta: { touched, error, warning } }) => {
    isFill && (input.value = valueDefault);
    return (
        <div className="eachRow">
            <label htmlFor={id} className="lbl">
                {label} :
            </label>
            <div className="boxVal">
                <input {...input} placeholder={label} type={type} id={id} disabled={isFill ? true : false} />
                {!isFill && touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
            </div>
        </div>
    );
};

class CheckoutForm extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            isFill: false
        };
    }

    handleFillInfor(e) {
        this.setState({
            isFill: e.target.checked
        });
    }

    handleSubmitFrm(e, isFill) {
        e.preventDefault();

        const { onSubmit, handleSubmit } = this.props;

        if (isFill) {
            onSubmit(customerInfo);
        } else {
            handleSubmit(null);
        }
    }

    render() {
        const { isFill } = this.state;
        const { pristine, reset, submitting } = this.props;

        let isDataFull = 0;
        for (let key in customerInfo) {
            if (customerInfo[key]) {
                ++isDataFull;
            }
        }

        return (
            <div className="container">
                <h2 className="titlePage">Customer's information</h2>
                {isDataFull === 4 ? (
                    <div className="fillInfo">
                        <label>
                            Fill old information: <input type="checkbox" onClick={e => this.handleFillInfor(e)} />
                        </label>
                    </div>
                ) : null}

                <form onSubmit={e => this.handleSubmitFrm(e, isFill)} className="frmCheckout">
                    <Field
                        name="fullname"
                        type="text"
                        id="fullname"
                        component={renderField}
                        label="Full name"
                        valueDefault={customerInfo.fullname}
                        isFill={isFill}
                    />
                    <Field
                        name="email"
                        type="email"
                        id="email"
                        component={renderField}
                        label="Email"
                        valueDefault={customerInfo.email}
                        isFill={isFill}
                    />
                    <Field
                        name="phone"
                        type="number"
                        id="phone"
                        component={renderField}
                        label="Phone number"
                        valueDefault={customerInfo.phone}
                        isFill={isFill}
                    />
                    <Field
                        name="address"
                        type="text"
                        id="address"
                        component={renderField}
                        label="Address"
                        valueDefault={customerInfo.address}
                        isFill={isFill}
                    />
                    <div className="actForm">
                        <button type="submit" disabled={submitting}>
                            Continue
                        </button>

                        <button type="button" disabled={pristine || submitting || isFill} onClick={reset}>
                            Clear Values
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

CheckoutForm.propTypes = {
    handleSubmit: PropTypes.func,
    onSubmit: PropTypes.func,
    pristine: PropTypes.bool,
    submitting: PropTypes.bool,
    reset: PropTypes.func
};

renderField.propTypes = {
    valueDefault: PropTypes.string,
    value: PropTypes.string,
    label: PropTypes.string,
    id: PropTypes.string,
    type: PropTypes.string,
    meta: PropTypes.object,
    input: PropTypes.object,
    isFill: PropTypes.bool.isRequired
};

export default reduxForm({
    form: 'syncValidation',
    validate,
    enableReinitialize: true
})(CheckoutForm);
