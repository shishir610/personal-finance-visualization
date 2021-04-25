import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import Range from './Tabs/Range';

export interface DetailbarProps {

}

const useStyles = makeStyles({
    root: {
        height: '40px',
        padding: '0 20px',
        marginTop: '10px'
    }
})

const Detailbar: React.FC<DetailbarProps> = () => {
    const classes = useStyles()

    return (
        <Grid container className={classes.root}>
            <Grid item md={6}>
                <Grid container alignItems='center' style={{ height: '100%' }}>
                    <Range />
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Detailbar;