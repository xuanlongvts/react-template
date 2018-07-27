import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

class ModalBox extends PureComponent {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        const { handleModal } = this.props;
        handleModal();
    }

    render() {
        const { isOpenModal, title, content, btnClose, btnAccept } = this.props;

        return (
            <Modal isOpen={isOpenModal} toggle={this.toggle} className="modalBox">
                <ModalHeader toggle={this.toggle}>{title}</ModalHeader>
                <ModalBody>
                    <div className="contentMess">{content}</div>
                </ModalBody>
                <ModalFooter>
                    {btnAccept && <Button color="primary">Do Something</Button>}
                    <Button color="secondary" onClick={this.toggle}>
                        {btnClose}
                    </Button>
                </ModalFooter>
            </Modal>
        );
    }
}

ModalBox.propTypes = {
    isOpenModal: PropTypes.bool.isRequired,
    handleModal: PropTypes.func.isRequired,
    title: PropTypes.string,
    content: PropTypes.string,
    btnClose: PropTypes.string,
    btnAccept: PropTypes.string
};

const mapStateToProps = state => {
    return {
        isOpenModal: state.reducModal.get('isOpenModal'),
        title: state.reducModal.get('title'),
        content: state.reducModal.get('content'),
        btnClose: state.reducModal.get('btnClose'),
        btnAccept: state.reducModal.get('btnAccept')
    };
};

export default connect(mapStateToProps)(ModalBox);
