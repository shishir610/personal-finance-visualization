import { Grid, makeStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
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
            <AddIcon color='primary' fontSize='small' className={classes.addIcon} />
        </Grid>
    );
}

export default Topbar;