import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import './styles.css';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function createRow(idx, TimeSlot, monday,
                   tuesday, wednesday, thursday,
                   friday) {
    return {
        idx, TimeSlot, monday,
        tuesday, wednesday, thursday,
        friday
    };
}

const timeSlots_ = [
    '08:10 - 09:00',
    '09:10 - 10:00',
    '10:10 - 11:00',
    '11:10 - 12:00',
    '12:10 - 13:00',
    '13:10 - 14:00',
    '14:10 - 15:00',
    '15:10 - 16:00',
    '16:10 - 17:00',
    '17:10 - 18:00',
    '18:10 - 19:00',
    '19:10 - 20:00',
    '20:10 - 21:00',
    '21:10 - 22:00'
];

export default function LabInfoTable(props) {
    const {reserver} = props;
    const classes = useStyles();
    const rows = [];
    for (let i = 0; i < timeSlots_.length; i++) {
        const time = timeSlots_[i];
        const mon = reserver.monday;
        const tues = reserver.tuesday;
        const wed = reserver.wednesday;
        const thurs = reserver.thursday;
        const fri = reserver.friday;
        rows.push(createRow(i, time, mon[time], tues[time],
            wed[time], thurs[time], fri[time]))
    }

    return (
        <TableContainer component={Paper} className={"MainTable"}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Time Slot</TableCell>
                        <TableCell className={"tbCell"} align="center">Monday</TableCell>
                        <TableCell className={"tbCell"} align="center">Tuesday</TableCell>
                        <TableCell className={"tbCell"} align="center">Wednesday</TableCell>
                        <TableCell className={"tbCell"} align="center">Thursday</TableCell>
                        <TableCell className={"tbCell"} align="center">Friday</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <TableRow key={row.idx}>
                            <TableCell component="th" scope="row">
                                {row.TimeSlot}
                            </TableCell>
                            <TableCell align="center">{row.monday}</TableCell>
                            <TableCell align="center">{row.tuesday}</TableCell>
                            <TableCell align="center">{row.wednesday}</TableCell>
                            <TableCell align="center">{row.thursday}</TableCell>
                            <TableCell align="center">{row.friday}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}