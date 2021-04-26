import { Grid, makeStyles } from '@material-ui/core';
import React, { Fragment, useRef } from 'react';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ExpandedRow from './ExpandedRow';

export interface ExpandablebarProps {
    name: string,
    units: number | null,
    addVar?: () => void
    vars?: VarsProps[]
}

export interface VarsProps {
    name: string,
    vals: string[]
}

const useStyles = makeStyles(theme => {
    return {
        root: {
            height: '37px',
            padding: '0 10px',
            alignItems: 'center',
            borderBottom: '1px solid #d0d0d0',
            backgroundColor: theme.palette.secondary.light
        },
        name: {
            margin: '0',
            fontSize: '13px',
            fontFamily: 'Inter',
            fontWeight: 500,
            marginRight: '8px'
        },
        units: {
            margin: '0',
            fontSize: '10px',
            fontFamily: 'Inter',
            fontWeight: 400,
            color: '#828282',
            marginTop: '1px'
        },
        expand: {
            maxHeight: '0px',
            overflow: 'hidden',
            transition: 'max-height .2s ease-out'
        }
    }
})

const Expandablebar: React.FC<ExpandablebarProps> = ({ name, units, addVar, vars }) => {
    const classes = useStyles()
    const divRef = useRef<HTMLDivElement | null>(null)

    const handleClick = () => {
        const { current } = divRef
        if (current != null) {
            if (current.style.maxHeight) {
                current.style.maxHeight = ''
            }
            else {
                current.style.maxHeight = current.scrollHeight + 'px';
            }
        }
    }

    return (
        <Fragment>
            <a onClick={handleClick}>
                <Grid container className={classes.root}>
                    <ArrowRightIcon color="secondary" fontSize='small' />
                    <p className={classes.name}>{name}</p>
                    <p className={classes.units}>{units} units</p>
                </Grid>
            </a>
            <div ref={divRef} className={classes.expand}>
                <ExpandedRow addVar={addVar} vars={vars} />
            </div>
        </Fragment>
    );
}

export default Expandablebar;