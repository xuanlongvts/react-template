import React, { PureComponent } from 'react';

import Search from '@material-ui/icons/Search';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class BoxSearch extends PureComponent {
    render() {
        return (
            <div className="boxSearch">
                <ExpansionPanel className="expanPanel">
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} className="expanTop">
                        <Typography>
                            <Search />
                        </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
        );
    }
}

export default BoxSearch;
