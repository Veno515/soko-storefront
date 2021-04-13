import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Badge, Typography, Box } from '@material-ui/core';

const useStyles = makeStyles((_theme) => ({
    root: {
        flexGrow: 1,
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
        textAlign: 'center',
        width: 300
      },
      bagdetailregular: {
        textAlign: 'center',
        width: 300
      }
}));

const Bag = () => {
    const classes = useStyles();

    return (
        <div>
          <Typography className={classes.categorytitle} variant="h5">Bag <Box component="span"><Badge className={classes.categoryquantity}><Typography className={classes.num}>0</Typography></Badge></Box></Typography>
          <img src="/emoji.png"></img>
          <Typography className={classes.bagdetailbold} variant="h6">It's empty here</Typography>
          <Typography className={classes.bagdetailregular} color="textSecondary" variant="h6">Start shopping to add items to your bag</Typography>
        </div>
    )
}

export default Bag;