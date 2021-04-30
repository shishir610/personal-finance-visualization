import { Grid, makeStyles } from '@material-ui/core';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import React from 'react';

export interface PortfolioTabProps {

}

const useStyles = makeStyles({
    root: {
        width: '180px',
        height: '37px',
        backgroundColor: 'white',
        borderRadius: '10px 10px 0 0',
        margin: '0 10px',
        marginTop: '5px'
    },
    portfolio: {
        margin: '0',
        fontFamily: 'Inter',
        fontSize: '13px',
        fontWeight: 500,
        wordBreak: 'break-all',
        marginLeft: '3px'
    }
})

const PortfolioTab: React.FC<PortfolioTabProps> = () => {
    const classes = useStyles()
    return (
        <Grid container alignItems="center" justify="center" className={classes.root}>
            <FiberManualRecordIcon color='primary' fontSize='inherit' />
            <p className={classes.portfolio}>Main Portfolio</p>
        </Grid>
    );
}

export default PortfolioTab;