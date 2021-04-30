import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import PortfolioTab from './PortfolioTab';

export interface TopbarProps {

}

const useStyles = makeStyles({
    root: {
        height: '42px',
        backgroundColor: 'hsl(212,93%,93%)'
    },
    addIcon: {
        marginTop: '10px'
    }
})

const Topbar: React.FC<TopbarProps> = () => {
    const classes = useStyles()
    return (
        <Grid container className={classes.root} alignItems="center">
            <PortfolioTab />
        </Grid>
    );
}

export default Topbar;