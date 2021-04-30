import { Grid, makeStyles, useTheme } from '@material-ui/core';
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import GetAppIcon from '@material-ui/icons/GetApp';
import FileSaver from "file-saver";
import React from 'react';
import { useSelector } from 'react-redux';
import { useRechartToPng } from "recharts-to-png";

export interface GraphContainerProps {
    mainType: string,
    subType: string,
    index: number
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
            margin: '0',
            marginLeft: '20px'
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
        getAppIcon: {
            marginLeft: '5px'
        },
        chartArea: {
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


const xAxisStyles = {
    fontFamily: 'Inter',
    fontSize: '13px',
    fontWeight: 400
}

const GraphContainer: React.FC<GraphContainerProps> = ({ mainType, subType, index }) => {
    const classes = useStyles()
    const months = ["OCT '20", "NOV '20", "DEC '20", "JAN '21", "FEB '21", "MAR '21", "APR"]
    const variable = useSelector((state: any) => state[mainType][subType][index])
    const name = variable.name
    const cells = variable.vals
    var data: { date: string, val: number }[] = []
    for (let i = 0; i < 7; i++) {
        data.push({ date: months[i], val: cells[i] })
    }
    const theme = useTheme()

    const [png, ref] = useRechartToPng();

    const handleDownload = React.useCallback(async () => {
        FileSaver.saveAs(png, name);
    }, [png]);


    return (
        <Grid container className={classes.root}>
            <Grid container style={{ marginBottom: '20px' }}>
                <Grid item xs={6}>
                    <p className={classes.title}>{name.toUpperCase()}</p>
                </Grid>
                <Grid item xs={6} className={classes.settings}>
                    <a onClick={handleDownload}>
                        <GetAppIcon fontSize='inherit' className={classes.getAppIcon} />
                    </a>
                </Grid>
            </Grid>
            <Grid container className={classes.chartArea}>
                <ResponsiveContainer width='100%' height='100%'>
                    <LineChart data={data} ref={ref}>
                        <Line type="monotone" dataKey="val" stroke={theme.palette.primary.dark} strokeWidth={2} />
                        <XAxis dataKey="date" style={xAxisStyles} tickMargin={10} tickLine={false} />
                        <YAxis dataKey="val" style={xAxisStyles} tickMargin={10} tickLine={false} />
                        <Tooltip />
                        <CartesianGrid opacity={0.5} />
                    </LineChart>
                </ResponsiveContainer>
            </Grid>
            <Grid container justify="center">
                <FiberManualRecordIcon color='primary' fontSize='inherit' />
                <p className={classes.subTitle}>{name}</p>
            </Grid>
        </Grid>
    );
}

export default GraphContainer;