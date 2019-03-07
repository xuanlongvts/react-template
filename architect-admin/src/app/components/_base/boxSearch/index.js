import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Field, reduxForm } from 'redux-form';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Search from '@material-ui/icons/Search';
import FormControl from '@material-ui/core/FormControl';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider, DateTimePicker } from 'material-ui-pickers';

import { renderTextField, renderCheckbox, radioButton, renderSelectField, renderDatePicker } from '../formComp';
import { validate } from './validate';

class BoxSearch extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            selectedDate: new Date(),
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log('handleSubmit');
    };

    handleDateChange(aa) {
        console.log('aaa', aa);
    }

    render() {
        const { hasErr } = this.props;
        const { selectedDate } = this.state;

        // expanded
        return (
            <div className="boxSearch">
                <ExpansionPanel className="expanPanel">
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} className="expanTop">
                        <Typography>
                            <Search />
                        </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <form onSubmit={this.handleSubmit} className="frmComm">
                            <Grid container spacing={24}>
                                <Grid item xs={3}>
                                    <FormControl fullWidth>
                                        <Field name="firstName" component={renderTextField} type="text" label="Text *" />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={3}>
                                    <FormControl fullWidth>
                                        <Field name="num" component={renderTextField} type="number" label="Number" />
                                    </FormControl>
                                </Grid>

                                <Grid item xs={3}>
                                    <FormControl fullWidth>
                                        <Field name="favoriteColor" component={renderSelectField} label="Favorite Color" id="favColor">
                                            <option value="" />
                                            <option value="ff0000">Red</option>
                                            <option value="00ff00">Green</option>
                                            <option value="0000ff">Blue</option>
                                        </Field>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={3}>
                                    <FormControl fullWidth>
                                        <Field name="email" type="email" component={renderTextField} label="Email" />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={3}>
                                    <FormControl>
                                        <Field name="remember" component={renderCheckbox} label="Remember me" />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={3}>
                                    <FormControl>
                                        <Field name="sex" component={radioButton} valueReceive="nam" label="Male" />
                                        <Field name="sex" component={radioButton} valueReceive="nu" label="Female" />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={3}>
                                    <FormControl fullWidth>
                                        <Field
                                            name="dateTimePicker"
                                            component={renderDatePicker}
                                            defaultValue={selectedDate}
                                            handleDateChange={this.handleDateChange}
                                            label="DateTimePicker"
                                        />
                                    </FormControl>
                                </Grid>
                            </Grid>
                            <Button type="submit" variant="contained" color="primary" disabled={hasErr}>
                                Search
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
    // const getFrm = state.form.frmSearch;

    return {
        hasErr: false,
    };
};

export default reduxForm({
    form: 'frmSearch',
    validate,
})(connect(mapStateToProps)(BoxSearch));
