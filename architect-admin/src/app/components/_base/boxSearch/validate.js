const validate = values => {
    const errors = {};
    const requiredFields = ['email'];
    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = 'Required';
        }
    });
    if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    if (values.password && values.password.length < 5) {
        errors.password = 'Password must 5 characters or more.';
    }
    if (values.rePassword && values.rePassword.length < 5) {
        errors.rePassword = 'Password must 5 characters or more.';
    }
    if (values.password && values.rePassword && values.password !== values.rePassword) {
        errors.rePassword = 'Password must be the same.';
    }
    return errors;
};

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const asyncValidate = values => {
    return sleep(1000).then(() => {
        if (['foo@foo.com', 'bar@bar.com'].includes(values.email)) {
            throw { email: 'Email already Exists' };
        }
    });
};

export { validate, asyncValidate };
