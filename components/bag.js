import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        paddingTop: theme.spacing(12),
        
      },
      verify: {
        borderRight: `1px solid ${theme.palette.divider}`,
        height: 500
      }
    }))

const Bag = () => {
    const classes = useStyles();
    return (
        <div>
            <Grid container>
                <Grid item lg={8}>
                    <div className={classes.verify}>
                        Add details
                    </div>
                </Grid>
                <Grid item lg={4}>
                    <div>
                        your bag
                    </div>
                </Grid>
            </Grid>
        </div>
    )
};

export default Bag;