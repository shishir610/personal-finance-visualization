import { Grid, makeStyles } from '@material-ui/core';
import BarChartIcon from '@material-ui/icons/BarChart';
import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import GraphContainer from './GraphContainer';

export interface GraphingAreaProps {

}

export interface RootState {
    graphing: { mainType: string, subType: string, index: number }[]
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

    const mainData = useSelector((state: RootState) => state.graphing)

    return (
        <Grid container className={classes.root} style={mainData.length === 0 ? { justifyContent: 'center' } : {}}>
            {mainData.length === 0 ?
                (
                    <Fragment>
                        <BarChartIcon color='secondary' classes={{ root: classes.barChart }} />
                        <p className={classes.noCharts}>
                            This portfolio has no charts!<br />
                            Create your first chart: select a variable and click on the new chart button
                        </p>
                    </Fragment>
                ) : (
                    mainData.map(track =>
                        <GraphContainer mainType={track.mainType} subType={track.subType} index={track.index} />)
                )}
        </Grid>
    );
}

export default GraphingArea;