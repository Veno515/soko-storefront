import React from "react";
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import { Badge, Button, Grid, Paper, Typography, ButtonBase, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        paddingTop: theme.spacing(12),
        // borderLeft: `1px solid ${theme.palette.divider}`,
      },
    categorytitle: {
         marginTop: '-88px',
         width: 100,
        // paddingLeft: theme.spacing(3),
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
      bagdetailbold: {
        fontWeight: 'bold',
        // textAlign: 'center',
      },
      bagdetailregular: {
        // textAlign: 'center',
      },
      backtohomebutton: {
        marginTop: theme.spacing(7),
        minWidth: 280,
        minHeight: 60,
        backgroundColor: '#FADC5B',
        borderRadius: '5px'
      },
     CTAbuttonstext: {
        fontWeight: 'bold'
      },
      trackbutton: {
          border: '2px solid #1569C8',
          marginTop: theme.spacing(7),
          minWidth: 230,
          minHeight: 60,
          borderRadius: '5px',
          marginRight: theme.spacing(3),
      }
}));

const Success = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
          <center>
            <img height="5%" width="5%" className={classes.emoji} src="/success.png"></img>
            <Typography className={classes.bagdetailbold} variant="h6">Thank you!</Typography>
            <Typography className={classes.bagdetailbold} variant="h6">Your order has been placed successfully</Typography>
            <Typography className={classes.bagdetailregular} color="textSecondary" variant="h6">You will receive confirmation message as soon as the order is confirmed.</Typography>
            <Typography className={classes.bagdetailregular} color="textSecondary" variant="h6" style={{marginTop: '20px'}}>Order Number: <strong>John - 271e</strong></Typography>
            <Link href="/"><Button color="primary" variant="outlined" className={classes.trackbutton}><Typography variant="h6" className={classes.CTAbuttonstext}>Track Order</Typography></Button></Link>
            <Link href="/"><Button color="primary" className={classes.backtohomebutton}><Typography variant="h6" className={classes.CTAbuttonstext}>Continue Shopping</Typography></Button></Link>
          </center>
        </div>
    )
}

export default Success;