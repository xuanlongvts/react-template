import React from 'react';
import PropTypes from 'prop-types';

import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/lab/Breadcrumbs';
import Button from '@material-ui/core/Button';
import CloudDownload from '@material-ui/icons/CloudDownload';
import CloudUpload from '@material-ui/icons/CloudUpload';

const BreadcrumbEle = data => {
    const getLenData = data.length;
    return data.map((item, key) => {
        return key === getLenData - 1 ? (
            <Typography key={key} color="textPrimary">
                {item}
            </Typography>
        ) : (
            <span key={key}>{item}</span>
        );
    });
};

const HeadTop = props => {
    const { titleShow, breadcrumbs } = props;
    let bredCrumEle = BreadcrumbEle(breadcrumbs);

    return (
        <div className="headTop">
            <div className="boxInfor">
                <Typography className="titleShow" variant="h5">
                    {titleShow}
                </Typography>
                <Breadcrumbs aria-label="Breadcrumb">{bredCrumEle}</Breadcrumbs>
            </div>
            <div className="boxAct">
                <Tooltip title="Import" placement="bottom-start">
                    <Button variant="contained" color="default" className="btnCycle mLef-15 btnImport">
                        <input className="hidden inputFile" type="file" accept=".xls, .xlsx" />
                        <CloudDownload />
                    </Button>
                </Tooltip>
                <Tooltip title="Export" placement="bottom-start">
                    <Button variant="contained" color="default" className="btnCycle mLef-15 btnExport">
                        <CloudUpload />
                    </Button>
                </Tooltip>

                <Button variant="contained" className="mLef-15 btnComm btnSave">
                    Save
                </Button>
                <Button variant="contained" className="mLef-15 btnComm btnSave">
                    Save and Continue
                </Button>
                <Button variant="contained" className="mLef-15 btnComm btnCreate">
                    Create
                </Button>
                <Button variant="contained" disabled className="mLef-15 btnComm btnCancel">
                    Cancel
                </Button>
            </div>
        </div>
    );
};

HeadTop.propTypes = {
    titleShow: PropTypes.string.isRequired,
    breadcrumbs: PropTypes.array.isRequired,
};

export default HeadTop;
