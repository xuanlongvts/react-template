import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import imgEmailSucc from '../../../../images/emailSucc.png';
import imgEmailErr from '../../../../images/emailErr.png';

class ModalMess extends PureComponent {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        const { handleModal } = this.props;
        handleModal();
    }

    render() {
        const { openModal, isError, errMess } = this.props;

        return (
            <Modal isOpen={openModal} toggle={this.toggle} className="modalMessEmail">
                <ModalHeader toggle={this.toggle}>&nbsp;</ModalHeader>
                <ModalBody>
                    <div className="contentMess">
                        <div className="mess">
                            {isError ? (
                                <span className="err">Opps! {errMess}... Please try again</span>
                            ) : (
                                <span>
                                    <span className="ico">
                                        <FontAwesomeIcon icon={faCheck} />
                                    </span>
                                    <span className="txt">
                                        Thank you for <strong>subscribing</strong>
                                    </span>
                                </span>
                            )}
                        </div>
                        <img src={isError ? imgEmailErr : imgEmailSucc} alt="Email" />
                    </div>
                </ModalBody>
            </Modal>
        );
    }
}

ModalMess.propTypes = {
    handleModal: PropTypes.func.isRequired,
    openModal: PropTypes.bool.isRequired,
    isError: PropTypes.bool.isRequired,
    errMess: PropTypes.string
};

const mapStateToProps = state => {
    return {
        dataSuccess: state.reducerHomeEmail.get('dataSuccess'),
        errMess: state.reducerHomeEmail.get('errMess'),
        isError: state.reducerHomeEmail.get('isError'),
        openModal: state.reducerHomeEmail.get('openModal')
    };
};

export default connect(mapStateToProps)(ModalMess);
