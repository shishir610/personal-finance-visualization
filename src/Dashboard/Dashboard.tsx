import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { addCrypto, addLiquid, addMain, addMiscellaneous, addNonLiquid, addRealEstate, addRegular, addSideHustles, addStocks } from '../actions';
import Expandablebar from './Expandablebar/Expandablebar';
import GraphingArea from './Graphing/GraphingArea';
import Header from './Heading/Header';
import MonthsTab from './Months/MonthsTab';
import Topbar from './Topbar/Topbar';
import RootState from '../store'

export interface DashboardProps {

}

interface RootState {
    income: {
        main: [],
        sideHustles: []
    },
    expenditure: {
        regular: [],
        miscellaneous: []
    },
    assets: {
        liquid: [],
        nonLiquid: []
    },
    investments: {
        stocks: [],
        realEstate: [],
        crypto: []
    }
}

const useStyles = makeStyles(theme => {
    return {
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
        },
        scrollable: {
            overflowX: 'auto'
        }
    }
})

const Dashboard: React.FC<DashboardProps> = (props) => {
    const classes = useStyles()

    const income = useSelector((state: RootState) => state.income)
    const expenditure = useSelector((state: RootState) => state.expenditure)
    const assets = useSelector((state: RootState) => state.assets)
    const investments = useSelector((state: RootState) => state.investments)

    return (
        <div className={classes.root}>
            <Topbar />
            <Grid container className={classes.main}>
                <Grid item md={8} className={classes.scrollable}>
                    <MonthsTab start='2020-10-01' end='2021-04-01' />
                    <Header name='INCOME' />
                    <Expandablebar name="MAIN" units={0} addVar={addMain} vars={income['main']} />
                    <Expandablebar name="SIDE HUSTLES" units={0} addVar={addSideHustles} vars={income['sideHustles']} />
                    <Header name='EXPENDITURE' />
                    <Expandablebar name="REGULAR" units={0} addVar={addRegular} vars={expenditure['regular']} />
                    <Expandablebar name="MISCELLANEOUS" units={0} addVar={addMiscellaneous} vars={expenditure['miscellaneous']} />
                    <Header name='ASSETS' />
                    <Expandablebar name="LIQUID" units={0} addVar={addLiquid} vars={assets['liquid']} />
                    <Expandablebar name="NON LIQUID" units={0} addVar={addNonLiquid} vars={assets['nonLiquid']} />
                    <Header name='INVESTMENTS' />
                    <Expandablebar name="STOCKS" units={0} addVar={addStocks} vars={investments['stocks']} />
                    <Expandablebar name="REAL ESTATE" units={0} addVar={addRealEstate} vars={investments['realEstate']} />
                    <Expandablebar name="CRYPTO" units={0} addVar={addCrypto} vars={investments['crypto']} />
                </Grid>
                <Grid item md={4} className={classes.graphingArea}>
                    <GraphingArea />
                </Grid>
            </Grid>
        </div>
    );
}

export default Dashboard;