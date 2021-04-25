import { Grid, makeStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import clsx from 'clsx';
import React from 'react';

export interface ExpandedRowProps {
    first?: boolean
}

export interface VarsProps {
    icon: JSX.Element
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
        icon: {
            color: theme.palette.secondary.main,
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
        headerCell: {
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
    }
})

const ExpandedRow: React.FC<ExpandedRowProps> = ({ first }) => {
    const classes = useStyles()
    const vars: VarsProps[] = [
        { icon: <i className={`fab fa-slack-hash ${classes.icon} fa-xs`}></i> }
    ]

    return (
        vars.length === 0 ? (
            <Grid container className={classes.root} style={first ? { borderTop: '1px solid #d0d0d0', } : {}}>
                <AddIcon fontSize='inherit' classes={{ root: classes.addIcon }} />
                <p className={classes.addAVar}>Add a variable</p>
            </Grid>
        ) : (
            <div>
                {vars.map(v => {
                    return (
                        <Grid
                            container
                            className={clsx(classes.root, classes.varRow)}
                            style={first ? { borderTop: '1px solid #d0d0d0', } : {}}
                        >
                            <Grid item className={classes.varSection}>
                                {v['icon']}
                                <p className={classes.varName}>Base Salary</p>
                            </Grid>
                            <Grid item className={classes.headerCell}>
                                <p className={classes.monthYear}></p>
                            </Grid>
                        </Grid>
                    )
                })}
            </div>
        )
    )
}

export default ExpandedRow;