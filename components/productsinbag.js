import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Badge, Box, Grid, Typography } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(3),
        
      },
      categorytitle: {
        width: 100,
        width: 115,
       // marginLeft: '-7%',
       fontWeight: 'bold',
     },
     categoryquantity: {
       backgroundColor: '#1569C8',
       borderRadius: '5px',
       width: '15px',
     },
     num: {
       color: 'white',
       fontWeight: 'bold',
     },
     clearbagtext: {
         textDecoration: 'underline'
     }
    }))

const Products = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item lg={10}>
                 <Typography className={classes.categorytitle} variant="h5">Bag <Box component="span"><Badge className={classes.categoryquantity}><Typography className={classes.num}>0</Typography></Badge></Box></Typography>
                </Grid>
                <Grid item lg={2}>
                    <Typography className={classes.clearbagtext} color="textSecondary">Clear Bag</Typography>
                </Grid>
             </Grid>
        </div>
    )
};

export default Products;