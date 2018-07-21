import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, FormGroup, Label, Input, FormText } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import TooltipItem from '../_base/TooltipItem';
import Utils from '../../../utils';

const filesAccept = ['.pdf', '.doc', '.docx'];
class CareersApply extends Component {
    isUnmount = false;

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            linkedin: '',
            resume: null,
            cover: null,

            isClickedSubmit: false
        };
    }

    componentWillUnmount() {
        this.isUnmount = true;
    }

    onSubmit = () => {
        this.setState(
            {
                isClickedSubmit: true
            },
            () => {
                const { hasAttachment, submit } = this.props;
                const { name, email, phone, linkedin, resume, cover } = this.state;
                if (this.isValiated()) {
                    let reqData = {
                        name: name.trim(),
                        email: email.trim(),
                        phone: phone.trim(),
                        linkedin: linkedin.trim()
                    };
                    hasAttachment &&
                        (reqData = {
                            ...reqData,
                            resume: resume,
                            cover: cover
                        });

                    submit &&
                        submit(reqData, () => {
                            !this.isUnmount &&
                                this.setState({
                                    name: '',
                                    email: '',
                                    phone: '',
                                    linkedin: '',
                                    resume: null,
                                    cover: null,
                                    isClickedSubmit: false
                                });
                        });
                }
            }
        );
    };

    getResumeError() {
        const { isClickedSubmit, resume } = this.state;
        if (isClickedSubmit && resume === null) {
            return 'Resume/CV is required';
        } else if (resume && !Utils.isFileAccepted(resume.name, filesAccept)) {
            return 'Only accept format: ' + filesAccept.join(', ');
        }
        return '';
    }

    getCoverError() {
        const { cover } = this.state;
        if (cover && !Utils.isFileAccepted(cover.name, filesAccept)) {
            return 'Only accept format: ' + filesAccept.join(', ');
        }
        return '';
    }

    getNameError() {
        const { isClickedSubmit, name } = this.state;
        const value = name.trim();

        if (isClickedSubmit && value === '') {
            return 'Name is required';
        } else if (name.length > 50) {
            return 'Max length is 50 characters';
        }

        return '';
    }

    getPhoneError() {
        const { isClickedSubmit, phone } = this.state;
        const value = phone.trim();

        if (isClickedSubmit && value === '') {
            return 'Phone is required';
        } else if (
            (((!isClickedSubmit && value !== '') || isClickedSubmit) && phone.length < 10) ||
            phone.length > 20
        ) {
            return 'Phone length contains about from 10 to 20 characters ';
        }
        return '';
    }

    getLinkedinError() {
        const { isClickedSubmit, linkedin } = this.state;
        const value = linkedin.trim();

        if (isClickedSubmit && value === '') {
            return 'Linkedin is required';
        } else if (linkedin.length > 100) {
            return 'Max length is 100 characters';
        }
        return '';
    }

    getEmailError() {
        const { isClickedSubmit, email } = this.state;
        const value = email.trim();

        if (isClickedSubmit && value === '') {
            return 'Email is required';
        } else if (value !== '' && !Utils.isEmail(value)) {
            return 'Email is invalid';
        } else if (email.length > 50) {
            return 'Max length is 50 characters';
        }
        return '';
    }

    isValiated = () => {
        const { hasAttachment } = this.props;
        const { name, email, phone, linkedin, resume, cover } = this.state;
        if (
            (hasAttachment && (!resume || (resume && !Utils.isFileAccepted(resume.name, filesAccept)))) ||
            (hasAttachment && (cover && !Utils.isFileAccepted(cover.name, filesAccept))) ||
            (name.trim() === '' || name.length > 50) ||
            (phone.trim() === '' || phone.length < 10 || phone.length > 20) ||
            (linkedin.trim() === '' || linkedin.length > 100) ||
            (!Utils.isEmail(email) || email.length > 50)
        ) {
            return false;
        }
        return true;
    };

    handleChange(field) {
        return e => {
            let value = e.target.value;
            switch (field) {
                case 'name':
                    value = Utils.trimWhiteSpacesInput(value);
                    break;
                case 'phone':
                    value = Utils.trimPhoneNumberInput(value);
                    break;
                case 'email':
                case 'linkedin':
                    value = Utils.trimWhiteSpaces(value);
                    break;
                default:
            }
            this.setState({ [field]: value });
        };
    }

    handleChangeFile(field) {
        return e => {
            this.setState({ [field]: e.target.files[0] });
        };
    }

    removeFile(field) {
        return () => {
            this.setState({ [field]: null });
        };
    }

    chooseFile(inputRef) {
        return () => {
            this[inputRef].click();
        };
    }

    render() {
        let { className, hasAttachment, actionAlign } = this.props;
        let { name, email, phone, linkedin, resume, cover } = this.state;
        className = className.trim() ? ' ' + className.trim() : '';

        const errors = {
            name: this.getNameError(),
            email: this.getEmailError(),
            phone: this.getPhoneError(),
            linkedin: this.getLinkedinError(),
            resume: this.getResumeError(),
            cover: this.getCoverError()
        };

        const accept = filesAccept.join(',');

        return (
            <div className={'apply-form' + className}>
                <div className="form-fields">
                    <FormGroup>
                        <Input
                            type="text"
                            name="apply-name"
                            id="apply-name"
                            placeholder="Fullname*"
                            value={name}
                            onChange={this.handleChange('name')}
                            invalid={!!errors.name}
                        />
                        {errors.name && (
                            <React.Fragment>
                                <FontAwesomeIcon
                                    icon={['fas', 'exclamation-circle']}
                                    id="apply-form-name-err"
                                    className="icon-err pos-input"
                                />
                                <TooltipItem placement="bottom-end" target="apply-form-name-err">
                                    {errors.name}
                                </TooltipItem>
                            </React.Fragment>
                        )}
                    </FormGroup>
                    <FormGroup>
                        <Input
                            type="text"
                            name="apply-email"
                            id="apply-email"
                            placeholder="Email*"
                            value={email}
                            onChange={this.handleChange('email')}
                            invalid={!!errors.email}
                        />
                        {errors.email && (
                            <React.Fragment>
                                <FontAwesomeIcon
                                    icon={['fas', 'exclamation-circle']}
                                    id="apply-form-email-err"
                                    className="icon-err pos-input"
                                />
                                <TooltipItem placement="bottom-end" target="apply-form-email-err">
                                    {errors.email}
                                </TooltipItem>
                            </React.Fragment>
                        )}
                    </FormGroup>
                    <FormGroup>
                        <Input
                            type="text"
                            name="apply-phone"
                            id="apply-phone"
                            placeholder="Phone*"
                            value={phone}
                            onChange={this.handleChange('phone')}
                            invalid={!!errors.phone}
                        />
                        {errors.phone && (
                            <React.Fragment>
                                <FontAwesomeIcon
                                    icon={['fas', 'exclamation-circle']}
                                    id="apply-form-phone-err"
                                    className="icon-err pos-input"
                                />
                                <TooltipItem placement="bottom-end" target="apply-form-phone-err">
                                    {errors.phone}
                                </TooltipItem>
                            </React.Fragment>
                        )}
                    </FormGroup>
                    <FormGroup>
                        <Input
                            type="text"
                            name="apply-linkedin"
                            id="apply-linkedin"
                            placeholder="Linkedin*"
                            value={linkedin}
                            onChange={this.handleChange('linkedin')}
                            invalid={!!errors.linkedin}
                        />
                        {errors.linkedin && (
                            <React.Fragment>
                                <FontAwesomeIcon
                                    icon={['fas', 'exclamation-circle']}
                                    id="apply-form-linkedin-err"
                                    className="icon-err pos-input"
                                />
                                <TooltipItem placement="bottom-end" target="apply-form-linkedin-err">
                                    {errors.linkedin}
                                </TooltipItem>
                            </React.Fragment>
                        )}
                    </FormGroup>

                    {hasAttachment && (
                        <FormGroup>
                            <Label for="apply-resume">
                                Resume/CV
                                {errors.resume && (
                                    <React.Fragment>
                                        <FontAwesomeIcon
                                            icon={['fas', 'exclamation-circle']}
                                            id="apply-form-resume-err"
                                            className="icon-err pos-inline"
                                        />
                                        <TooltipItem placement="bottom-end" target="apply-form-resume-err">
                                            {errors.resume}
                                        </TooltipItem>
                                    </React.Fragment>
                                )}
                            </Label>
                            <Input
                                type="file"
                                name="apply-resume"
                                id="apply-resume"
                                style={{ display: 'none' }}
                                accept={accept}
                                innerRef={input => (this.resumeRef = input)}
                                onChange={this.handleChangeFile('resume')}
                            />
                            <Button color="link" className="btn-choose-file" onClick={this.chooseFile('resumeRef')}>
                                Attached your file*
                            </Button>
                            {resume && (
                                <Button color="link" className="btn-remove" onClick={this.removeFile('resume')}>
                                    (Remove)
                                </Button>
                            )}
                            <FormText color="muted" className="file-name">
                                {resume && resume.name}
                            </FormText>
                        </FormGroup>
                    )}
                    {hasAttachment && (
                        <FormGroup>
                            <Label for="apply-cover">
                                Cover letter
                                {errors.cover && (
                                    <React.Fragment>
                                        <FontAwesomeIcon
                                            icon={['fas', 'exclamation-circle']}
                                            id="apply-form-cover-err"
                                            className="icon-err pos-inline"
                                        />
                                        <TooltipItem placement="bottom-end" target="apply-form-cover-err">
                                            {errors.cover}
                                        </TooltipItem>
                                    </React.Fragment>
                                )}
                            </Label>
                            <Input
                                type="file"
                                name="apply-cover"
                                id="apply-cover"
                                style={{ display: 'none' }}
                                accept={accept}
                                innerRef={input => (this.coverRef = input)}
                                onChange={this.handleChangeFile('cover')}
                            />
                            <Button color="link" className="btn-choose-file" onClick={this.chooseFile('coverRef')}>
                                Attached your file
                            </Button>
                            {cover && (
                                <Button color="link" className="btn-remove" onClick={this.removeFile('cover')}>
                                    (Remove)
                                </Button>
                            )}
                            <FormText color="muted" className="file-name">
                                {cover && cover.name}
                            </FormText>
                        </FormGroup>
                    )}
                </div>
                <div className="form-action" style={{ textAlign: actionAlign }}>
                    <Button color="link" className="buttonGreen apply-submit" onClick={this.onSubmit}>
                        Submit
                    </Button>
                </div>
            </div>
        );
    }
}

CareersApply.defaultProps = {
    className: '',
    hasAttachment: true,
    actionAlign: 'left'
};

CareersApply.propTypes = {
    className: PropTypes.string,
    hasAttachment: PropTypes.bool,
    actionAlign: PropTypes.string,
    submit: PropTypes.func.isRequired
};

export default CareersApply;
