import React from "react";
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import { Badge, Button, Grid, Paper, Typography, ButtonBase, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        paddingTop: theme.spacing(12),
      },
    categorytitle: {
         marginTop: '-88px',
         width: 100,
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
      },
      bagdetailregular: {
      },
      backtohomebutton: {
        marginTop: theme.spacing(7),
        minWidth: 330,
        minHeight: 60,
        backgroundColor: '#FADC5B',
        borderRadius: '5px'
      },
     CTAbuttonstext: {
        fontWeight: 'bold'
      }
}));

const EmptyBag = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
          <center>
            <img height="22%" width="22%" className={classes.emoji} src="/emoji.png"></img>
            <Typography className={classes.bagdetailbold} variant="h6">It's empty here</Typography>
            <Typography className={classes.bagdetailregular} color="textSecondary" variant="h6">Start shopping to add items to your bag</Typography>
            <Link href="/"><Button color="primary" className={classes.backtohomebutton}><Typography variant="h6" className={classes.CTAbuttonstext}>Back to Homepage</Typography></Button></Link>
          </center>
        </div>
    )
}

export default EmptyBag;