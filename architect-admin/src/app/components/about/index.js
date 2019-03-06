import React, { PureComponent } from 'react';
import Paper from '@material-ui/core/Paper';
import { PagingState, IntegratedPaging } from '@devexpress/dx-react-grid';
import { Grid, Table, TableHeaderRow, TableFixedColumns, PagingPanel, VirtualTable } from '@devexpress/dx-react-grid-material-ui';

import HeadTop from '../_base/headTop';
import { generateRows, globalSalesValues } from './generator';

const bredCrumArr = ['Material-UI', 'Lap', 'Breadcrumbs'];
const titleShow = 'Category';

class About extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            columns: [
                { name: 'region', title: 'Region' },
                { name: 'sector', title: 'Sector' },
                { name: 'channel', title: 'Channel' },
                { name: 'customer', title: 'Customer' },
                { name: 'product', title: 'Product' },
                { name: 'saleDate', title: 'Sale date' },
                { name: 'units', title: 'Units' },
                { name: 'discount', title: 'Discount' },
                { name: 'shipped', title: 'Shipped' },
                { name: 'amount', title: 'Sale Amount' },
            ],
            rows: generateRows({ columnValues: globalSalesValues, length: 80 }),
            tableColumnExtensions: [
                { columnName: 'region', width: 150 },
                { columnName: 'sector', width: 180 },
                { columnName: 'channel', width: 120 },
                { columnName: 'product', width: 230 },
                { columnName: 'customer', width: 230 },
                { columnName: 'saleDate', width: 130 },
                { columnName: 'units', width: 80 },
                { columnName: 'discount', width: 120 },
                { columnName: 'shipped', width: 120 },
                { columnName: 'amount', align: 'right', width: 140 },
            ],
            leftColumns: ['region', 'channel'],
            rightColumns: ['amount'],
            pageSizes: [10, 15, 50, 0],
        };
    }

    render() {
        const { rows, columns, tableColumnExtensions, leftColumns, rightColumns, pageSizes } = this.state;

        return (
            <section className="aboutPage">
                <HeadTop titleShow={titleShow} breadcrumbs={bredCrumArr} />
                <div className="mainContent">
                    <Paper>
                        <Grid rows={rows} columns={columns}>
                            <VirtualTable />
                            <PagingState defaultCurrentPage={0} defaultPageSize={pageSizes[0]} />
                            <IntegratedPaging />
                            <Table columnExtensions={tableColumnExtensions} />
                            <TableHeaderRow />
                            <TableFixedColumns leftColumns={leftColumns} rightColumns={rightColumns} />

                            <PagingPanel pageSizes={pageSizes} />
                        </Grid>
                    </Paper>
                </div>
            </section>
        );
    }
}

export default About;
