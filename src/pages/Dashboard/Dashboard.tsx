import { Grid } from '@material-ui/core';
import React, { Fragment } from 'react';
import Detailbar from './Detailbar/Detailbar';
import Expandablebar from './Expandablebar/Expandablebar';
import Header from './Heading/Header';
import Topbar from './Topbar/Topbar';

export interface DashboardProps {

}

const Dashboard: React.FC<DashboardProps> = (props) => {
    return (
        <Fragment>
            <Topbar />
            <Detailbar />
            <Grid container>
                <Grid item md={8}>
                    <Header name='ASSETS' />
                    <Expandablebar name="LIQUID" units={0} />
                    <Expandablebar name="NON LIQUID" units={0} />
                    <Header name='INVESTMENTS' />
                    <Expandablebar name="STOCKS" units={0} />
                    <Expandablebar name="REAL ESTATE" units={0} />
                    <Expandablebar name="CRYPTO" units={0} />
                </Grid>
                <Grid item md={4}>
                    {/* Graphing Area */}
                </Grid>
            </Grid>
        </Fragment>
    );
}

export default Dashboard;