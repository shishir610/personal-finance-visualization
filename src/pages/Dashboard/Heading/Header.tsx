import { Grid, makeStyles } from '@material-ui/core';
import React from 'react'

export interface HeaderProps {
    name: string
}

const useStyles = makeStyles(theme => {
    return {
        root: {
            height: '37px',
            padding: '0 30px',
            alignItems: 'center',
            borderBottom: '2px dotted #d0d0d0',
            borderTop: '2px dotted #d0d0d0',
            margin: '10px 0',
            fontSize: '16px',
            fontWeight: 500
        },
    }
})

const Header: React.FC<HeaderProps> = ({ name }) => {
    const classes = useStyles()
    return (
        <Grid container className={classes.root}>
            {name}
        </Grid>
    );
}

export default Header;