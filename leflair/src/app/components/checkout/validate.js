const validate = values => {
    const errors = {};
    if (!values.fullname) {
        errors.fullname = 'Required';
    } else if (values.fullname.length < 3) {
        errors.fullname = 'Must be 3 characters or more';
    }

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.address) {
        errors.address = 'Required';
    } else if (values.address.length < 10) {
        errors.address = 'Must be 10 characters or more';
    }

    return errors;
};

export default validate;
