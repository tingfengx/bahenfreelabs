import React from "react";
import {withStyles} from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import LabInfoTable from "../LabInfoTable";
import './styles.css';
import Typography from "@material-ui/core/Typography";

const ExpansionPanel = withStyles({
    root: {
        align: 'center',
        border: '1px solid rgba(0, 0, 0, .125)',
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
    expanded: {align: 'center',},
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
    const {room, reserver} = props;

    const [expanded, setExpanded] = React.useState('BA2200');

    const handleChange = panel => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div>
            <ExpansionPanel square={false}
                            expanded={expanded === room}
                            onChange={handleChange(room)}>

                <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography align={"center"} variant={"h5"}>{room}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <LabInfoTable reserver={reserver}/>
                </ExpansionPanelDetails>

            </ExpansionPanel>
        </div>
    );
}
