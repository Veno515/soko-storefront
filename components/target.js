import React from 'react';
import Link from 'next/link';
import { Badge, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Storefront from '@material-ui/icons/Storefront';
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import { useCart } from '../hooks/useCart';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 190,
    [theme.breakpoints.down('sm')]: {
      height: 420,
    },
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  container: {
    paddingTop: theme.spacing(13),
    marginLeft: theme.spacing(26),
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(2),
    },
    [theme.breakpoints.up('xs')]: {
      marginLeft: theme.spacing(2),
    },
    [theme.breakpoints.up('md')]: {
      marginLeft: theme.spacing(26),
    },
  },
  leftsidecont: {
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  targetheader: {
    paddingLeft: theme.spacing(3),
    marginBottom: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(0),
      paddingTop: theme.spacing(1),
    }
  },
  targetheadertext: {
    display: 'flex',
    flexDirection: 'column',
   },
   rightsidecont: {
    display: 'flex',
    flexDirection: 'row',
    float: 'right',
    position: 'sticky',
    marginRight: theme.spacing(26),
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      float: 'left',
      paddingTop: theme.spacing(1),
      badge: {
        float: 'left',
      }
    },
    "@media (width: 1024px)":{
      paddingTop: theme.spacing(0),
      marginTop: theme.spacing(-5)
    }
  },
  navtext: {
    marginLeft: theme.spacing(2),
    cursor: 'pointer',
  },
  account: {
    paddingLeft: theme.spacing(4),
    display: 'flex',
    flexDirection:'row',
    [theme.breakpoints.down('sm')]: {
      float: 'left',
      paddingTop: theme.spacing(1),
      marginLeft: theme.spacing(-4),
    }
  },
  bag:{
    display: 'flex',
    flexDirection:'row',
    [theme.breakpoints.down('sm')]: {
      width: 40,
      marginBottom: theme.spacing(1),
      marginTop: theme.spacing(2),
    },
  }
}));

export default function Target() {
  const classes = useStyles();
  const {cart,setCart} = useCart();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Grid container>
          <Grid item sm={12} xs={12} m6={6} lg={6}>
            <div className={classes.leftsidecont}>
              <Storefront color="action" fontSize="large"/>
              <div className={classes.targetheadertext}>
                <Typography className={classes.targetheader} variant="h5">Target</Typography>
                <Typography className={classes.targetheader}>Cham Towers, Plot 12 Nkrumah Rd, Kampala, Ug</Typography>
              </div>
            </div>
          </Grid>
          <Grid item sm={12} xs={12} m6={6} lg={6}>
            <div className={classes.rightsidecont}>
              <div className={classes.bag}> 
                <Badge color="secondary" badgeContent={cart}>
                  <Link href='/bag'>
                    <ShoppingBasketOutlinedIcon fontSize="large" style={{color:'grey',cursor:'pointer'}}/>
                  </Link>
                </Badge>
                <Link href='/bag'>
                  <Typography className={classes.navtext} variant="h6" color="textSecondary">Bag</Typography>
                </Link>
              </div>
              <div className={classes.account}>
                <PersonOutlineOutlinedIcon fontSize="large" style={{color:'grey',cursor:'pointer'}}/>
                <Link href='/#'>
                  <Typography className={classes.navtext} variant="h6" color="textSecondary">Account</Typography>
                </Link>
              </div>
            </div>
          </Grid>
        </Grid>
       </div>
    </div>
  );
}
