import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import MONTHS from './Months.json'

export interface MonthsTabProps {
    start: string,
    end: string
}

const useStyles = makeStyles(theme => {
    return {
        root: {
            height: '37px',
            padding: '0 30px',
            alignItems: 'center',
            borderTop: '1px solid #d0d0d0',
            borderBottom: '1px solid #d0d0d0',
            backgroundColor: theme.palette.secondary.light,
            fontSize: '16px',
            fontWeight: 500,
            overflowX: 'auto',
            flexDirection: 'row',
            marginTop: '40px'
        },
        box: {
            width: '300px',
            height: '100%',
            borderRight: '1px solid #d0d0d0',
            display: 'flex',
            alignItems: 'center',
        },
        headerCell: {
            width: '92px',
            height: '100%',
            borderRight: '1px solid #d0d0d0',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            flexWrap: 'nowrap'
        },
        monthYear: {
            fontFamily: 'Inter',
            fontSize: '13px',
            fontWeight: 500,
            margin: '0 5px'
        },
        div: {
            display: 'flex',
        }
    }
})

const MonthsTab: React.FC<MonthsTabProps> = ({ start, end }) => {
    const classes = useStyles()
    var months: JSX.Element[] = []

    const dateRange = (startDate: string, endDate: string) => {
        var start = startDate.split('-');
        var end = endDate.split('-');
        var startYear = parseInt(start[0]);
        var endYear = parseInt(end[0]);
        var dates = [];

        for (var i = startYear; i <= endYear; i++) {
            var endMonth = i != endYear ? 11 : parseInt(end[1]) - 1;
            var startMon = i === startYear ? parseInt(start[1]) - 1 : 0;
            for (var j = startMon; j <= endMonth; j = j > 12 ? j % 12 || 11 : j + 1) {
                var month = j + 1;
                var displayMonth = month < 10 ? '0' + month : month;
                dates.push([i, displayMonth, '01'].join('-'));
            }
        }
        return dates;
    }

    dateRange(start, end).map(date => {
        let year = date.split('-')[0].slice(2, 4)
        let month: string = MONTHS[Number(date.split('-')[1]) - 1]
        months.push(
            <Grid item className={classes.headerCell}>
                <p className={classes.monthYear}>{month} '{year}</p>
            </Grid>
        )
    })

    return (
        <Grid container className={classes.root}>
            <div className={classes.box}>
                MONTHS
            </div>
            {months}
        </Grid>
    );
}

export default MonthsTab;