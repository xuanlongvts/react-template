import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link as RouterLink, withRouter } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

import Link from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import RouterApp from '../consts';
import styles from './style';
import { validate } from './validate';
import { loginCall } from './action';
import { renderTextField, renderCheckbox } from '../../components/_base/formComp';

class SignIn extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {};

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = e => {
        e.preventDefault();
        const { loginCall, valEmail, valPassword } = this.props;
        const inforAcc = {
            valEmail,
            valPassword,
        };
        loginCall(inforAcc);
    };

    render() {
        const { classes, pristine, submitting, reset, hasErr } = this.props;

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

                        <Field name="remember" component={renderCheckbox} label="Remember me" />

                        <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit} disabled={hasErr}>
                            Sign in
                        </Button>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="secondary"
                            className={classes.submit}
                            disabled={pristine || submitting}
                            onClick={reset}>
                            Reset
                        </Button>
                    </form>
                    <div className={classes.linkMore}>
                        <Link component={RouterLink} to={RouterApp.signup} color="textPrimary">
                            Sign up
                        </Link>
                        <Link component={RouterLink} to={RouterApp.resetpass} color="textPrimary">
                            Forgot password?
                        </Link>
                    </div>
                </Paper>

                <div style={{ marginTop: '20px' }}>
                    <p>
                        Full authorized: <strong>Email: </strong>admin@gmail.com / <strong>pass:</strong> any
                    </p>
                    <p>
                        Not full authorized: <strong>Email: </strong>any / <strong>pass:</strong> any
                    </p>
                </div>
            </main>
        );
    }
}

SignIn.propTypes = {
    classes: PropTypes.object.isRequired,
    loginCall: PropTypes.func.isRequired,
    pristine: PropTypes.bool.isRequired,
    reset: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
    valEmail: PropTypes.string,
    valPassword: PropTypes.string,
    hasErr: PropTypes.bool.isRequired,
};

const mapStateToProps = state => {
    const getFrm = state.form.frmLogin;
    const getVal = getFrm ? getFrm.values : {};
    const getErr = getFrm ? getFrm.syncErrors : {};
    const hasErr = getErr && (getErr.email || getErr.password) ? true : false;

    return {
        valEmail: getVal ? getVal.email : '',
        valPassword: getVal ? getVal.password : '',
        hasErr,
    };
};

const mapDispatchToProps = {
    loginCall,
};

export default withRouter(
    reduxForm({
        form: 'frmLogin',
        validate,
    })(
        withStyles(styles)(
            connect(
                mapStateToProps,
                mapDispatchToProps,
            )(SignIn),
        ),
    ),
);
