import React from "react";
import {withStyles} from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import LabInfoTable from "../LabInfoTable";
import './styles.css';

const ExpansionPanel = withStyles({
    root: {
        border: '2px solid rgba(0, 0, 0, .125)',
        boxShadow: 'none',
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
        '&$expanded': {
            margin: 'auto',
        },
    },
    expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
    root: {
        backgroundColor: 'rgba(0, 0, 0, .03)',
        borderBottom: '1px solid rgba(0, 0, 0, .125)',
        marginBottom: -1,
        minHeight: 56,
        '&$expanded': {
            minHeight: 56,
        },
    },
    content: {
        '&$expanded': {
            margin: '12px 0',
        },
    },
    expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(theme => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiExpansionPanelDetails);

export default function LabInfo(props) {
    const { room, reserver } = props;

    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = panel => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div>
            <ExpansionPanel square
                            className = {"MainPanel"}
                            expanded={expanded === 'panel1'}
                            onChange={handleChange('panel1')}>

                <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
                    <p className={"roomName"}>{ room }</p>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <LabInfoTable reserver={reserver}/>
                </ExpansionPanelDetails>

            </ExpansionPanel>
        </div>
    );
}