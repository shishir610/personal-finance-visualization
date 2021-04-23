import { Grid, makeStyles } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import DateRangeIcon from '@material-ui/icons/DateRange';
import React, { useState } from 'react';
import RangePopover from '../../../popovers/RangePopover';

export interface DetailbarProps {

}

const useStyles = makeStyles(theme => {
    return {
        root: {
            height: '45px',
            margin: '0 20px'
        },
        datePicker: {
            width: '180px',
            display: 'flex',
            '& p': {
                fontFamily: 'Inter',
                fontWeight: 600,
                fontSize: '13px',
                margin: '0 0 0 5px',
                color: theme.palette.primary.main
            }
        },
    }
})

const Detailbar: React.FC<DetailbarProps> = () => {
    const classes = useStyles()
    const [anchorEl, setAnchorEl] = useState<HTMLAnchorElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    return (
        <Grid container className={classes.root}>
            <Grid item md={6}>
                <Grid container alignItems='center' style={{ height: '100%' }}>
                    <div>
                        <a onClick={handleClick}>
                            <div className={classes.datePicker}>
                                <DateRangeIcon fontSize='inherit' color='primary' />
                                <p>Pick a range</p>
                                <ArrowDropDownIcon fontSize='small' color='primary' />
                            </div>
                        </a>
                        <RangePopover id={id} open={open} anchorEl={anchorEl} handleClose={handleClose} />
                    </div>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Detailbar;