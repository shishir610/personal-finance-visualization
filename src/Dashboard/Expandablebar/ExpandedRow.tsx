import { Grid, makeStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import clsx from 'clsx';
import React from 'react';
import { useDispatch } from 'react-redux';

export interface ExpandedRowProps {
    addVar?: () => void,
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
            '&:hover': {
                cursor: 'pointer'
            },
            '&:hover $addIcon,&:hover $addAVar': {
                color: theme.palette.primary.main
            }
        },
        addIcon: {
            color: theme.palette.secondary.main
        },
        addAVar: {
            color: theme.palette.secondary.main,
            textAlign: 'center',
            margin: '0',
            marginLeft: '5px',
            fontSize: '13px',
        },
        varRow: {
            padding: '0 30px',
            '&:hover': {
                cursor: 'default'
            },
        },
        varSection: {
            width: '300px',
            height: '100%',
            borderRight: '1px solid #d0d0d0',
            display: 'flex',
            alignItems: 'center'
        },
        varName: {
            fontFamily: 'Inter',
            fontSize: '13px',
            color: '#182D1F',
            fontWeight: 500,
            marginLeft: '5px'
        },
        cell: {
            width: '92px',
            height: '100%',
            borderRight: '1px solid #d0d0d0',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            flexWrap: 'nowrap'
        },
        monthYear: {
            fontFamily: 'Inter',
            fontSize: '13px',
            fontWeight: 500,
            margin: '0 5px'
        },
        inputText: {
            border: 'none',
            background: 'transparent',
            outline: 0,
            width: '100%',
            height: '100%',
            fontSize: '13px',
            padding: '0 10px'
        },
        icon: {
            color: theme.palette.secondary.main,
        },
    }
})

const ExpandedRow: React.FC<ExpandedRowProps> = ({ addVar, vars }) => {
    const classes = useStyles()
    const dispatch = useDispatch()

    console.log(vars)

    return (
        vars && vars.length === 0 ? (
            <Grid container className={classes.root} onClick={addVar ? () => dispatch(addVar()) : () => { }}>
                <AddIcon fontSize='inherit' classes={{ root: classes.addIcon }} />
                <p className={classes.addAVar}>Add a variable</p>
            </Grid>
        ) : (
            <div>
                {vars && vars.map(v => {
                    return (
                        <Grid
                            container
                            className={clsx(classes.root, classes.varRow)}
                        >
                            <Grid item className={classes.varSection}>
                                <i className={`fab fa-slack-hash ${classes.icon} fa-xs`}></i>
                                <input type="text" placeholder='New Variable' className={classes.inputText} />
                            </Grid>
                            {[1, 2, 3, 4, 5, 6].map(_ => {
                                return (
                                    <Grid item className={classes.cell}>
                                        <input type="text" className={classes.inputText} />
                                    </Grid>
                                )
                            })}
                        </Grid>
                    )
                })}
            </div>
        )
    )
}

export default ExpandedRow;