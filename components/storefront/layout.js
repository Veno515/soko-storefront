import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Categories from '../storefront/categories';
import Category from '../storefront/displaycategory';
import Bag from '../storefront/bag';

const useStyles = makeStyles((theme) => ({
    root: {
        flex: 1,
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
    },
    bag: {
        // marginTop: theme.spacing(-11),
        marginLeft: theme.spacing(5),
        paddingLeft: theme.spacing(5),
        borderLeft: `1px solid ${theme.palette.divider}`,
    }
}));

const SokoStoreFront =() => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.row}>
                <div>
                    <Category/>
                </div>
                <div className={classes.bag}>
                    <Bag/>
                </div>
            </div>
        </div>
    )
}

export default SokoStoreFront;