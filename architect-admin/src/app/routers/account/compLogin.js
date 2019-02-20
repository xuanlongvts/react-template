import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink, withRouter } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

import Link from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormHelperText from '@material-ui/core/FormHelperText';
import TextField from '@material-ui/core/TextField';

import { RouterUnAuthen } from '../consts';
import styles from './style';
import { validate, asyncValidate } from './validate';

const renderTextField = ({ label, input, type, meta: { touched, invalid, error }, ...custom }) => (
    <TextField
        label={label}
        type={type}
        placeholder={label}
        error={touched && invalid}
        helperText={touched && error}
        {...input}
        {...custom}
    />
);

const renderFromHelper = ({ touched, error }) => {
    if (!(touched && error)) {
        return;
    } else {
        return <FormHelperText>{touched && error}</FormHelperText>;
    }
};

class SignIn extends PureComponent {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log('aaa');
    };

    render() {
        const { classes, pristine, submitting, reset } = this.props;

        return (
            <main className={classes.main}>
                <Paper className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <form className={classes.form} onSubmit={this.handleSubmit}>
                        <FormControl margin="normal" required fullWidth>
                            <Field name="email" type="email" component={renderTextField} label="Email" />
                        </FormControl>

                        <FormControl margin="normal" required fullWidth>
                            <Field name="password" type="password" component={renderTextField} label="Password" />
                        </FormControl>
                        <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            disabled={pristine || submitting}>
                            Sign in
                        </Button>

                        <Button
                            type="button"
                            fullWidth
                            variant="contained"
                            color="primary"
                            disabled={pristine || submitting}
                            onClick={reset}>
                            Reset
                        </Button>
                    </form>
                    <div className={classes.linkMore}>
                        <Link component={RouterLink} to={RouterUnAuthen.signup} color="textPrimary">
                            Sign up
                        </Link>
                        <Link component={RouterLink} to={RouterUnAuthen.resetpass} color="textPrimary">
                            Forgot password?
                        </Link>
                    </div>
                </Paper>
            </main>
        );
    }
}

SignIn.propTypes = {
    classes: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    pristine: PropTypes.bool.isRequired,
    reset: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
};

renderTextField.propTypes = {
    label: PropTypes.string.isRequired,
    input: PropTypes.object,
    meta: PropTypes.object,
    type: PropTypes.string.isRequired,
};

renderFromHelper.propTypes = {
    touched: PropTypes.bool,
    error: PropTypes.string,
};

export default withRouter(
    reduxForm({
        form: 'frmLogin',
        validate,
        asyncValidate,
    })(withStyles(styles)(SignIn)),
);
