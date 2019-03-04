import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import Avatar from '@material-ui/core/Avatar';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';

import RouterConst from '../consts';
import imgNongNo from '../../../images/nong.jpg';
import { logoutCall } from '../account/action';

const AccountMenu = props => {
    const [open, setOpen] = React.useState(false);
    const anchorEl = React.useRef(null);

    function handleToggle() {
        setOpen(!open);
    }

    function handleClose(event) {
        if (anchorEl.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    }

    function handleLogout(e) {
        handleClose(e);
        const { logoutCall } = props;
        logoutCall();
    }

    return (
        <div className="boxAccount">
            <Button buttonRef={anchorEl} aria-owns={open ? 'menu-list-grow' : undefined} aria-haspopup="true" onMouseEnter={handleToggle}>
                <Avatar alt="Admin" src={imgNongNo} />
            </Button>
            <Popper open={open} anchorEl={anchorEl.current} transition disablePortal>
                {({ TransitionProps, placement }) => (
                    <Grow {...TransitionProps} id="menu-list-grow" style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}>
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList>
                                    <Link to={RouterConst.point} style={{ color: '#111', textDecoration: 'none' }}>
                                        <MenuItem onClick={handleClose}>Point</MenuItem>
                                    </Link>
                                    <Link to={RouterConst.whychoose} style={{ color: '#111', textDecoration: 'none' }}>
                                        <MenuItem onClick={handleClose}>Why</MenuItem>
                                    </Link>
                                    <Link to={RouterConst.architect} style={{ color: '#111', textDecoration: 'none' }}>
                                        <MenuItem onClick={handleClose}>Architect</MenuItem>
                                    </Link>
                                    <MenuItem onClick={e => handleLogout(e)}>Logout</MenuItem>
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </div>
    );
};

AccountMenu.propTypes = {
    logoutCall: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
    logoutCall,
};

export default connect(
    null,
    mapDispatchToProps,
)(AccountMenu);
