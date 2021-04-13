import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Category from '../storefront/displaycategory';
import Bag from '../storefront/bag';

const useStyles = makeStyles((theme) => ({
    root: {
        flex: 1,
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        [theme.breakpoints.down('sm')]: {
            flexDirection:'column',
        }
    },
    category: {
        [theme.breakpoints.down('xs')]: {
           width:'120%',
          }
    },
    bag: {
        marginTop: theme.spacing(-9),
        marginLeft: theme.spacing(17),
        paddingLeft: theme.spacing(5),
        borderLeft: `1px solid ${theme.palette.divider}`,
        [theme.breakpoints.down('sm')]: {
            marginTop: theme.spacing(15),
            marginLeft: theme.spacing(-9),
            borderLeft: `none`,
          }
    }
}));

const SokoStoreFront =() => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container>
                <div className={classes.row}>
                <Grid item lg={6} sm={12} xs={12}>
                    <div className={classes.category}>
                    <Category/>
                    </div>
                </Grid>
                <Grid item lg={4}>
                    <div className={classes.bag}> 
                        <Bag/>
                    </div>
                </Grid>
                </div>
            </Grid>
        </div>
    )
}

export default SokoStoreFront;