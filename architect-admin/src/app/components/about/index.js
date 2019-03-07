import React, { PureComponent } from 'react';
import { PagingState, IntegratedPaging } from '@devexpress/dx-react-grid';
import { Grid, Table, TableHeaderRow, TableFixedColumns, PagingPanel, VirtualTable } from '@devexpress/dx-react-grid-material-ui';

import HeadTop from '../_base/headTop';
import BoxSearch from '../_base/boxSearch';
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

            btnStatus: {
                saveStatus: false,
                saveContinueStatus: true,
                createStatus: false,
                cancelStatus: true,
            },
        };

        this.handleSave = this.handleSave.bind(this);
        this.handleSaveContinue = this.handleSaveContinue.bind(this);
        this.handleSaveCreate = this.handleSaveCreate.bind(this);
        this.handleSaveCancel = this.handleSaveCancel.bind(this);
    }

    handleSave() {
        console.log('handle Save');

        const {
            btnStatus,
            btnStatus: { saveStatus, saveContinueStatus },
        } = this.state;
        this.setState({
            btnStatus: {
                ...btnStatus,
                saveContinueStatus: !saveContinueStatus,
                saveStatus: !saveStatus,
            },
        });
    }

    handleSaveContinue() {
        console.log('Continue Save');

        const {
            btnStatus,
            btnStatus: { saveStatus, saveContinueStatus },
        } = this.state;
        this.setState({
            btnStatus: {
                ...btnStatus,
                saveContinueStatus: !saveContinueStatus,
                saveStatus: !saveStatus,
            },
        });
    }

    handleSaveCreate() {
        console.log('Create');
    }

    handleSaveCancel() {
        console.log('Cancel');
    }

    render() {
        const {
            rows,
            columns,
            tableColumnExtensions,
            leftColumns,
            rightColumns,
            pageSizes,
            btnStatus: { saveStatus, saveContinueStatus, createStatus, cancelStatus },
        } = this.state;

        const btnSave = {
            disabled: saveStatus,
            callBack: this.handleSave,
        };
        const btnSaveContinue = {
            disabled: saveContinueStatus,
            callBack: this.handleSaveContinue,
        };
        const btnCreate = {
            disabled: createStatus,
            callBack: this.handleSaveCreate,
        };
        const btnCacel = {
            disabled: cancelStatus,
            callBack: this.handleSaveCancel,
        };

        return (
            <section className="aboutPage">
                <HeadTop
                    titleShow={titleShow}
                    breadcrumbs={bredCrumArr}
                    btnSave={btnSave}
                    btnSaveContinue={btnSaveContinue}
                    btnCreate={btnCreate}
                    btnCacel={btnCacel}
                />
                <div className="mainContent">
                    <BoxSearch />
                    <div className="wrapTable">
                        <Grid rows={rows} columns={columns}>
                            <VirtualTable />
                            <PagingState defaultCurrentPage={0} defaultPageSize={pageSizes[0]} />
                            <IntegratedPaging />
                            <Table columnExtensions={tableColumnExtensions} />
                            <TableHeaderRow />
                            <TableFixedColumns leftColumns={leftColumns} rightColumns={rightColumns} />

                            <PagingPanel pageSizes={pageSizes} />
                        </Grid>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;
