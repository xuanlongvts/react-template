import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';

const renderField = ({ input, id, label, type, meta: { touched, error, warning } }) => (
    <div className="eachRow">
        <label htmlFor={id} className="lbl">
            {label} :
        </label>
        <div className="boxVal">
            <input {...input} placeholder={label} type={type} id={id} />
            {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </div>
);

const CheckoutForm = ({ pristine, reset, submitting, handleSubmit }) => {
    return (
        <div className="container">
            <h2 className="titlePage">Customer's information</h2>
            <form onSubmit={handleSubmit} className="frmCheckout">
                <Field name="fullname" type="text" id="fullname" component={renderField} label="Full name" />
                <Field name="email" type="email" id="email" component={renderField} label="Email" />
                <Field name="phone" type="number" id="phone" component={renderField} label="Phone number" />
                <Field name="address" type="text" id="address" component={renderField} label="Address" />
                <div className="actForm">
                    <button type="submit" disabled={submitting}>
                        Continue
                    </button>
                    <button type="button" disabled={pristine || submitting} onClick={reset}>
                        Clear Values
                    </button>
                </div>
            </form>
        </div>
    );
};

CheckoutForm.propTypes = {
    handleSubmit: PropTypes.func,
    pristine: PropTypes.bool,
    submitting: PropTypes.bool,
    reset: PropTypes.func
};

renderField.propTypes = {
    value: PropTypes.string,
    label: PropTypes.string,
    id: PropTypes.string,
    type: PropTypes.string,
    meta: PropTypes.object,
    input: PropTypes.object
};

export default reduxForm({
    form: 'syncValidation',
    validate
})(CheckoutForm);
