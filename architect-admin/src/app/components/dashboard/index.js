import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import SimpleLineChart from './SimpleLineChart';
import SimpleTable from './SimpleTable';

const styles = () => ({
    chartContainer: {
        marginLeft: -22,
    },
    tableContainer: {
        height: 320,
    },
});

class Dashboard extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;

        return (
            <section id="dashboard">
                <Typography variant="h4" gutterBottom component="h2">
                    Orders
                </Typography>
                <Typography component="div" className={classes.chartContainer}>
                    <SimpleLineChart />
                </Typography>
                <Typography variant="h4" gutterBottom component="h2">
                    Products
                </Typography>
                <div className={classes.tableContainer}>
                    <SimpleTable />
                </div>
            </section>
        );
    }
}

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);
