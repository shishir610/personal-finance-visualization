import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import SettingsIcon from '@material-ui/icons/Settings';
import GetAppIcon from '@material-ui/icons/GetApp';
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import clsx from 'clsx';

export interface GraphProps {

}

const useStyles = makeStyles(theme => {
    return {
        root: {
            fontSize: '16px',
            fontWeight: 400,
            height: '340px',
            width: '90%',
            backgroundColor: 'white',
            marginTop: '20px',
            padding: '18px',
            border: '2px solid white',
            '&:hover': {
                border: '2px solid #d0d0d0',
                cursor: 'pointer'
            }
        },
        title: {
            margin: '0'
        },
        subTitle: {
            margin: '2px 0',
            fontSize: '13px',
            color: theme.palette.secondary.main
        },
        settings: {
            display: 'flex',
            justifyContent: 'flex-end',
        },
        settingsIcon: {
            marginLeft: '5px'
        },
        chartArea: {
            // background: '#f0f0f0',
            height: '75%'
        },
        inputText: {
            border: 'none',
            background: 'transparent',
            outline: 0,
            fontSize: '13px',
        },
    }
})

const data = [
    { date: 'APR \'21', val: 15000 },
    { date: 'MAY \'21', val: 45500 },
    { date: 'JUN \'21', val: 46500 },
    { date: 'JUL \'21', val: 47000 },
    { date: 'AUG \'21', val: 48000 },
    { date: 'SEP \'21', val: 50000 },
    { date: 'OCT \'21', val: 54000 },
    { date: 'NOV \'21', val: 60000 },
]

const Graph: React.FC<GraphProps> = () => {
    const classes = useStyles()

    return (
        <Grid container className={classes.root}>
            <Grid container style={{ marginBottom: '10px' }}>
                <Grid item xs={6}>
                    <input className={clsx(classes.title, classes.inputText)} value={'NAME'}></input>
                    <input className={clsx(classes.subTitle, classes.inputText)} value={'Description'}></input>
                </Grid>
                <Grid item xs={6} className={classes.settings}>
                    <SettingsIcon fontSize='inherit' className={classes.settingsIcon} />
                </Grid>
            </Grid>
            <Grid container className={classes.chartArea}>
                <ResponsiveContainer width='100%' height='100%'>
                    <LineChart data={data}>
                        <Line type="monotone" dataKey="val" stroke="#8884d8" />
                        <XAxis dataKey="date" />
                        <YAxis dataKey="val" />
                    </LineChart>
                </ResponsiveContainer>
            </Grid>
            <Grid container justify="center">
                <FiberManualRecordIcon color='primary' fontSize='inherit' />
                <p className={classes.title}>Name</p>
            </Grid>
        </Grid>
    );
}

export default Graph;