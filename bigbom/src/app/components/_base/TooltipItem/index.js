import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from 'reactstrap';

class TooltipItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tooltipOpen: false
        };
    }

    toggle = () => {
        const { tooltipOpen } = this.state;
        this.setState({ tooltipOpen: !tooltipOpen });
    };

    render() {
        const { tooltipOpen } = this.state;
        const { children } = this.props;

        const defaultProps = {
            placement: 'right'
        };

        const tmpProps = [...this.props];
        delete tmpProps.children;
        const realProps = {
            ...defaultProps,
            ...this.props
        };
        return (
            <Tooltip {...realProps} isOpen={tooltipOpen} toggle={this.toggle}>
                {children}
            </Tooltip>
        );
    }
}

TooltipItem.propTypes = {
    children: PropTypes.any.isRequired
};

export default TooltipItem;
