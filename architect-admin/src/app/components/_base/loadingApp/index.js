import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
// import Modal from '@material-ui/core/Modal';
import Dialog from '@material-ui/core/Dialog';

const LoadingApp = ({ isLoading }) => {
    return (
        <Dialog open={isLoading} style={styles.wrap}>
            <CircularProgress style={styles.loading} />
        </Dialog>
    );
};

LoadingApp.propTypes = {
    isLoading: PropTypes.bool.isRequired,
};

const styles = {
    wrap: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loading: {
        outline: 'none',
        margin: '20px',
    },
};

const mapStateToProps = state => {
    return {
        isLoading: state.loadingRoot.get('isLoading'),
    };
};

export default connect(mapStateToProps)(LoadingApp);
