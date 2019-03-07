import React from 'react';
import PropTypes from 'prop-types';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Checkbox from '@material-ui/core/Checkbox';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';

import moment from 'moment';
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider, DateTimePicker } from 'material-ui-pickers';

const renderFromHelper = ({ touched, error }) => {
    if (!(touched && error)) {
        return;
    } else {
        return <FormHelperText>{touched && error}</FormHelperText>;
    }
};

export const renderTextField = ({ label, input, type, meta: { touched, invalid, error }, ...custom }) => (
    <TextField label={label} type={type} placeholder={label} error={touched && invalid} helperText={touched && error} {...input} {...custom} />
);

export const renderCheckbox = ({ input, label }) => (
    <FormControlLabel control={<Checkbox checked={input.value ? true : false} onChange={input.onChange} />} label={label} labelPlacement="start" />
);

export const radioButton = ({ input, valueReceive, label, ...rest }) => {
    return (
        <RadioGroup {...input} {...rest} className="radioButton">
            <FormControlLabel value={valueReceive} control={<Radio />} label={label} labelPlacement="start" />
        </RadioGroup>
    );
};

export const renderSelectField = ({ input, id, label, meta: { touched, error }, children, ...custom }) => {
    return (
        <FormControl error={touched && error}>
            <InputLabel htmlFor="age-native-simple">{label}</InputLabel>
            <Select
                native
                {...input}
                {...custom}
                inputProps={{
                    id: id,
                }}>
                {children}
            </Select>
            {renderFromHelper({ touched, error })}
        </FormControl>
    );
};

export const renderDatePicker = ({ input, label, defaultValue, disablePast, handleDateChange, meta: { touched, error } }) => {
    return (
        <FormControl error={touched && error}>
            <MuiPickersUtilsProvider utils={MomentUtils} moment={moment}>
                <DateTimePicker
                    {...input}
                    value={defaultValue}
                    onChange={handleDateChange}
                    format="DD/MM/YYYY hh:mm:ss"
                    disablePast={disablePast}
                    label={label}
                />
            </MuiPickersUtilsProvider>
            {renderFromHelper({ touched, error })}
        </FormControl>
    );
};

renderDatePicker.propTypes = {
    label: PropTypes.string.isRequired,
    input: PropTypes.object,
    meta: PropTypes.object,
    defaultValue: PropTypes.instanceOf(Date),
    disablePast: PropTypes.bool,
    handleDateChange: PropTypes.func,
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

renderCheckbox.propTypes = {
    label: PropTypes.string.isRequired,
    input: PropTypes.object,
};

radioButton.propTypes = {
    input: PropTypes.object,
    label: PropTypes.string,
    valueReceive: PropTypes.string,
};

renderSelectField.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string.isRequired,
    input: PropTypes.object,
    meta: PropTypes.object,
    children: PropTypes.array,
};
