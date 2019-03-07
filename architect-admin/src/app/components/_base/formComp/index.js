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
    <div className="chkBox">
        <FormControlLabel control={<Checkbox checked={input.value ? true : false} onChange={input.onChange} />} label={label} />
    </div>
);

export const radioButton = ({ input, label, ...rest }) => (
    <FormControl>
        <RadioGroup {...input} {...rest}>
            <FormControlLabel value="female" control={<Radio />} label="aaa" />
            <FormControlLabel value="male" control={<Radio />} label="bbb" />
        </RadioGroup>
    </FormControl>
);

export const renderSelectField = ({ input, label, meta: { touched, error }, children, ...custom }) => (
    <FormControl error={touched && error}>
        <InputLabel htmlFor="age-native-simple">{label}</InputLabel>
        <Select
            native
            {...input}
            {...custom}
            inputProps={{
                name: 'age',
                id: 'age-native-simple',
            }}>
            {children}
        </Select>
        {renderFromHelper({ touched, error })}
    </FormControl>
);

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
};

renderSelectField.propTypes = {
    label: PropTypes.string.isRequired,
    input: PropTypes.object,
    meta: PropTypes.object,
    children: PropTypes.object,
};
