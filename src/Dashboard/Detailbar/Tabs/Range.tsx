import { makeStyles } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import DateRangeIcon from '@material-ui/icons/DateRange';
import React, { useState } from 'react';
import RangePopover from '../../../popovers/RangePopover';

export interface RangeProps {

}

const useStyles = makeStyles(theme => {
    return {
        datePicker: {
            display: 'flex',
            marginRight: '20px',
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

const Range: React.FC<RangeProps> = () => {
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
    );
}

export default Range;