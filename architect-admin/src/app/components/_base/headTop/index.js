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
    const { titleShow, breadcrumbs, btnSave, btnSaveContinue, btnCreate, btnCacel } = props;
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

                {btnSave && (
                    <Button variant="contained" disabled={btnSave.disabled} className="mLef-15 btnComm btnSave" onClick={btnSave.callBack}>
                        Save
                    </Button>
                )}
                {btnSaveContinue && (
                    <Button variant="contained" disabled={btnSaveContinue.disabled} className="mLef-15 btnComm btnSave" onClick={btnSaveContinue.callBack}>
                        Save and Continue
                    </Button>
                )}
                {btnCreate && (
                    <Button variant="contained" disabled={btnCreate.disabled} className="mLef-15 btnComm btnCreate" onClick={btnCreate.callBack}>
                        Create
                    </Button>
                )}
                {btnCacel && (
                    <Button variant="contained" disabled={btnCacel.disabled} className="mLef-15 btnComm btnCancel" onClick={btnCacel.callBack}>
                        Cancel
                    </Button>
                )}
            </div>
        </div>
    );
};

HeadTop.propTypes = {
    titleShow: PropTypes.string.isRequired,
    breadcrumbs: PropTypes.array.isRequired,
    btnSave: PropTypes.object,
    btnSaveContinue: PropTypes.object,
    btnCreate: PropTypes.object,
    btnCacel: PropTypes.object,
};

export default HeadTop;
