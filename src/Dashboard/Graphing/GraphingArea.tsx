import { Grid, makeStyles } from '@material-ui/core';
import BarChartIcon from '@material-ui/icons/BarChart';
import React from 'react';
import Graph from './Graph';

export interface GraphingAreaProps {

}

const useStyles = makeStyles(theme => {
    return {
        root: {
            border: '2px solid #d0d0d0',
            borderTop: '2px dotted #d0d0d0',
            borderRight: 'none',
            borderBottom: 'none',
            fontSize: '16px',
            fontWeight: 500,
            height: '100%',
            flex: 1,
            background: theme.palette.secondary.light,
            flexDirection: 'column',
            alignItems: 'center'
        },
        barChart: {
            height: '40px',
            width: 'auto',
            color: '#c9c9c9'
        },
        noCharts: {
            color: '#c9c9c9',
            textAlign: 'center',
            margin: '0'
        }
    }
})

const GraphingArea: React.FC<GraphingAreaProps> = () => {
    const classes = useStyles()

    return (
        <Grid container className={classes.root}>
            {/* <BarChartIcon color='secondary' classes={{ root: classes.barChart }} />
            <p className={classes.noCharts}>
                This portfolio has no charts!<br />
                Create your first chart: select a variable and click on the new chart button
            </p> */}
            <Graph />
        </Grid>
    );
}

export default GraphingArea;