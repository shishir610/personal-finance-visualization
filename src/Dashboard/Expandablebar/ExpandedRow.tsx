import { Grid, makeStyles, Theme, Tooltip, withStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import clsx from 'clsx';
import React from 'react';
import { useDispatch } from 'react-redux';
import { handleVarTitleChange } from '../../actions';

export interface ExpandedRowProps {
    addVar?: () => void,
    vars: VarsProps[],
    name: string,
    handleClick: (expand: boolean) => void
}

export interface VarsProps {
    name: string,
    vals?: string[]
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
        cellInput: {
            color: theme.palette.primary.dark
        },
        icon: {
            color: theme.palette.secondary.main,
        },
        newVar: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
        },
        addGraph: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: '0 10px'
        }
    }
})

const LightTooltip = withStyles((theme: Theme) => ({
    tooltip: {
        backgroundColor: theme.palette.common.white,
        color: 'rgba(0, 0, 0, 0.87)',
        boxShadow: theme.shadows[1],
        fontSize: 11,
    }
}))(Tooltip);

const ExpandedRow: React.FC<ExpandedRowProps> = ({ addVar, vars, name, handleClick }) => {
    const classes = useStyles()
    const dispatch = useDispatch()

    return (
        <div>
            {vars.map((v, id) => {
                if (v.name === 'newVar' || v.vals == undefined) {
                    return (
                        <Grid container className={classes.root}
                            onClick={addVar ?
                                () => {
                                    dispatch(addVar())
                                    handleClick(false)
                                } :
                                () => { }}
                        >
                            <AddIcon fontSize='inherit' classes={{ root: classes.addIcon }} />
                            <p className={classes.addAVar}>Add a variable</p>
                        </Grid>
                    )
                }
                else {
                    return (
                        <Grid
                            container
                            className={clsx(classes.root, classes.varRow)}
                        >
                            <Grid item className={classes.varSection}>
                                <Grid container style={{ height: '100%' }}>
                                    <Grid item xs={8} className={classes.newVar}>
                                        <i className={`fab fa-slack-hash ${classes.icon} fa-xs`}></i>
                                        <input
                                            type="text"
                                            id={`${id}`}
                                            placeholder='New Variable'
                                            className={classes.inputText}
                                            onChange={(event) => {
                                                dispatch(handleVarTitleChange(event, name))
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={4} className={classes.addGraph}>
                                        <LightTooltip title="Add this variable to the graph" placement="top">
                                            <a>
                                                <img src="./add.svg" height="15px" width="auto" />
                                            </a>
                                        </LightTooltip>
                                    </Grid>
                                </Grid>
                            </Grid>
                            {v.vals.map(_ => {
                                return (
                                    <Grid item className={classes.cell}>
                                        <input type="text" className={clsx(classes.inputText, classes.cellInput)} />
                                    </Grid>
                                )
                            })}
                        </Grid>
                    )
                }
            })}
        </div>
    )
}

export default ExpandedRow;