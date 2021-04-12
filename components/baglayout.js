import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core";
import AddDetails from './addDetails';
import Products from '../components/productsinbag';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        paddingTop: theme.spacing(12),
        
      },
      verify: {
        borderRight: `1px solid ${theme.palette.divider}`,
        [theme.breakpoints.down('sm')]: {
            borderRight: `none`,  
        },
        height: 500
      }
    }))

const Bag = () => {
    const classes = useStyles();
    return (
        <div>
            <Grid container>
                <Grid item lg={8} md={8}>
                    <div className={classes.verify}>
                        <AddDetails/>
                    </div>
                </Grid>
                <Grid item lg={4}>
                    <div>
                        <Products/>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
};

export default Bag;