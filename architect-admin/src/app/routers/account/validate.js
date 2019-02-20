const validate = values => {
    const errors = {};
    const requiredFields = ['email', 'password'];
    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = 'Required';
        }
    });

    if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    if (values.password && values.password.length < 5) {
        errors.password = 'Must be 5 characters or more';
    }

    return errors;
};

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const asyncValidate = values => {
    return sleep(1000).then(() => {
        if (['foo@foo.com', 'bar@bar.com'].includes(values.email)) {
            // eslint-disable-next-line no-throw-literal
            throw { email: 'Email already Exists' };
        }
    });
};

export { validate, asyncValidate };
