import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Field, reduxForm } from 'redux-form';
import Radio from '@material-ui/core/Radio';
import Button from '@material-ui/core/Button';
import Search from '@material-ui/icons/Search';
import FormControl from '@material-ui/core/FormControl';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { renderTextField, renderCheckbox, radioButton } from '../formComp';
import { validate } from './validate';

class BoxSearch extends PureComponent {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log('handleSubmit');
    };

    render() {
        const { hasErr } = this.props;

        return (
            <div className="boxSearch">
                <ExpansionPanel className="expanPanel" expanded>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} className="expanTop">
                        <Typography>
                            <Search />
                        </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <form onSubmit={this.handleSubmit}>
                            <div>
                                <Field name="firstName" component={renderTextField} label="First Name" />
                            </div>
                            <div>
                                <Field name="sex" component={radioButton}>
                                    <Radio value="male" label="male" />
                                    <Radio value="female" label="female" />
                                </Field>
                            </div>
                            <FormControl margin="normal" required fullWidth>
                                <Field name="email" type="email" component={renderTextField} label="Email" />
                            </FormControl>

                            <Field name="remember" component={renderCheckbox} label="Remember me" />

                            <Button type="submit" fullWidth variant="contained" color="primary" disabled={hasErr}>
                                Sign in
                            </Button>
                        </form>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
        );
    }
}

BoxSearch.propTypes = {
    hasErr: PropTypes.bool.isRequired,
};

const mapStateToProps = state => {
    const getFrm = state.form.frmSearch;
    const getVal = getFrm ? getFrm.values : {};
    const getErr = getFrm ? getFrm.syncErrors : {};
    const hasErr = getErr && (getErr.email || getErr.password) ? true : false;

    return {
        valEmail: getVal ? getVal.email : '',
        valPassword: getVal ? getVal.password : '',
        hasErr,
    };
};

export default reduxForm({
    form: 'frmSearch',
    validate,
})(connect(mapStateToProps)(BoxSearch));
