import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null
        };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError: true,
            error: error,
            errorInfo: errorInfo
        });
    }

    render() {
        const { hasError, error, errorInfo } = this.state;
        const { children } = this.props;
        console.log(error, errorInfo);

        if (hasError) {
            return <h1>Something went wrong.</h1>;
        }
        return children;
    }
}

ErrorBoundary.propTypes = {
    children: PropTypes.object.isRequired
};

export default ErrorBoundary;
