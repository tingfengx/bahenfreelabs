import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

function getDay() {
    const day = new Date().getDay();
    if (day === 1) {
        return 'monday'
    } else if (day === 2) {
        return 'tuesday'
    } else if (day === 3) {
        return 'wednesday'
    } else if (day === 4) {
        return 'thursday'
    } else if (day === 5) {
        return 'monday'
    } else {
        return 'weekend'
    }
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

// if it is now 8.30, then hour = 8, want to return 0 in this case
function getHourRange() {
    const hour = new Date().getHours();
    if (hour <= 22 && hour >= 8){
        return timeSlots_[hour - 8];
    } else {
        return 'night';
    }
}

export default function CurAvail(props) {
    const classes = useStyles();
    const { BA2200, BA3175, BA3185, BA3195 } = props;

    let freeLabs = [
        "BA2210",
        "BA2220",
        "BA2240",
        "BA2270",
        "BA3200"
    ];

    console.log(getDay(), getHourRange())
    if (getDay() === 'weekend' || getHourRange() === 'night') {
        freeLabs.push("BA2200"); freeLabs.push("BA3175");
        freeLabs.push("BA3185"); freeLabs.push("BA3195");
    } else {
        if (BA2200[getDay()][getHourRange()] === "") {
            freeLabs.push("BA2200");
        }
        if (BA3175[getDay()][getHourRange()] === "") {
            freeLabs.push("BA3175");
        }
        if (BA3185[getDay()][getHourRange()] === "") {
            freeLabs.push("BA3185");
        }
        if (BA3195[getDay()][getHourRange()] === "") {
            freeLabs.push("BA3195");
        }
    }

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h6" color="textSecondary" gutterBottom>
                    Last queried time: {new Date().toTimeString()}
                </Typography>
                <Typography variant="h3" color="textPrimary" gutterBottom>
                    Current Available Labs:
                </Typography>
                <Typography variant="h5" color="textPrimary" gutterBottom>
                    {
                        freeLabs.map(function (label) {
                            return <span key={label}>{label + "  "}</span>
                        })
                    }
                </Typography>
            </CardContent>

        </Card>
    );
}