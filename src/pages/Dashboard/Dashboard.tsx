import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import Detailbar from './Detailbar/Detailbar';
import Expandablebar from './Expandablebar/Expandablebar';
import GraphingArea from './Graphing/GraphingArea';
import Header from './Heading/Header';
import Topbar from './Topbar/Topbar';

export interface DashboardProps {

}

const useStyles = makeStyles({
    root: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column'
    },
    main: {
        flex: 1
    },
    graphingArea: {
        display: 'flex',
        flexDirection: 'column'
    }
})

const Dashboard: React.FC<DashboardProps> = (props) => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Topbar />
            <Detailbar />
            <Grid container className={classes.main}>
                <Grid item md={8}>
                    <Header name='INCOME' />
                    <Expandablebar name="MAIN" units={0} />
                    <Expandablebar name="SIDE HUSTLES" units={0} />
                    <Header name='EXPENDITURE' />
                    <Expandablebar name="REGULAR" units={0} />
                    <Expandablebar name="MISCELLANEOUS" units={0} />
                    <Header name='ASSETS' />
                    <Expandablebar name="LIQUID" units={0} />
                    <Expandablebar name="NON LIQUID" units={0} />
                    <Header name='INVESTMENTS' />
                    <Expandablebar name="STOCKS" units={0} />
                    <Expandablebar name="REAL ESTATE" units={0} />
                    <Expandablebar name="CRYPTO" units={0} />
                </Grid>
                <Grid item md={4} className={classes.graphingArea}>
                    <GraphingArea />
                </Grid>
            </Grid>
        </div>
    );
}

export default Dashboard;