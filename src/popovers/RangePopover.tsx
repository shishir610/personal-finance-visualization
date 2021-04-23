import DateFnsUtils from '@date-io/date-fns';
import { Grid, List, makeStyles, Popover } from '@material-ui/core';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import React from 'react';

export interface RangePopoverProps {
    id: string | undefined,
    open: boolean,
    anchorEl: HTMLAnchorElement | null,
    handleClose: () => void,
}

const useStyles = makeStyles({
    root: {
        width: '380px',
        padding: '10px'
    },
    desc: {
        fontFamily: 'Inter',
        fontSize: '14px',
        margin: '5px 0 20px 0'
    },
    horizontalRule: {
        borderTop: '1px solid #f0f0f0'
    },
    to: {
        marginTop: '15px',
        fontWeight: 500
    }
})

const RangePopover: React.FC<RangePopoverProps> = ({ id, open, anchorEl, handleClose }) => {
    const classes = useStyles()
    const [selectedDate, setSelectedDate] = React.useState<Date | null>(
        new Date(Date.now())
    )
    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
    }

    return (
        <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
            style={{ marginTop: '10px' }}
        >
            <Grid container className={classes.root}>
                <List>
                    <p className={classes.desc}>Select a start date and end date for which you wish to calculate your portfolio assets.</p>
                    <hr className={classes.horizontalRule} />
                    <Grid container alignItems="flex-end">
                        <Grid item xs={5}>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    disableToolbar
                                    label="Start Date"
                                    variant="inline"
                                    format="MM/dd/yyyy"
                                    margin="normal"
                                    id="date-picker-inline"
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                            </MuiPickersUtilsProvider>
                        </Grid>
                        <Grid item xs={1}>
                            <p className={classes.to}>—</p>
                        </Grid>
                        <Grid item xs={5}>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    disableToolbar
                                    label="End Date"
                                    variant="inline"
                                    format="MM/dd/yyyy"
                                    margin="normal"
                                    id="date-picker-inline"
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                            </MuiPickersUtilsProvider>
                        </Grid>
                    </Grid>
                </List>
            </Grid>
        </Popover>
    );
}

export default RangePopover;