import React from 'react';
import Link from 'next/link';
import Box from '@material-ui/core/Box';
import StorefrontIcon from '@material-ui/icons/Storefront';
import { Badge, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Storefront from '@material-ui/icons/Storefront';
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import Category from '../components/storefront/displaycategory';
import { useCart } from '../hooks/useCart';

const useStyles = makeStyles((theme) => ({
  subheadtitle: {
    color: 'theme.color.black',
    marginLeft: '30px',
    fontWeight: 'bold',
  },
  // subheadbox: {
  //    marginLeft: '192px',
  //   },
  subheadrow: {
    display: 'flex',
    flexDirection: 'row',
  },
  storefronticon: {
    backgroundColor: '#f4f0ec',
    borderRadius: '100%',
    height:'70px',
    width: '70px',
    position: 'relative',
  },
  storefronticonsvg: {
   position: 'absolute',
   top: '50%',
   left: '50%',
   marginRight: '-50%',
   transform: 'translate(-50%, -50%)',
  },
  subheadaddress: {
    marginLeft: theme.spacing(13),
    marginTop: theme.spacing(-4),
    fontWeight: 'bold',
  },
  subheadbox: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    height: '120px',
    
  },
  navitems: {
    float: 'right',
    marginTop: '-48px',
    paddingRight: '192px',
   
  },
  nav: {
    display: 'flex',
    flexDirection: 'row'
  },
  navtext: {
    paddingLeft: theme.spacing(2),
    marginTop: theme.spacing(1),
    cursor: 'pointer'
  },
  accounticon: {
    paddingLeft: theme.spacing(6),
  }
}));

export default function Target() {
  const classes = useStyles();

  const {cart,setCart} = useCart();

  // console.log(cart);

  // setTimeout(() => {
  //   setCart(cart++)
  // console.log(cart);

  // }, 2000);

  return (
    <div>
      <Box className={classes.subheadbox} component="span" display="block" p={1} m={1} pt={3} pl={25} bgcolor="background.paper">
        <div className={classes.subheadrow}>
          <div className={classes.storefronticon}><div className={classes.storefronticonsvg}> <Storefront fontSize="large" style={{color: 'darkgrey'}}/></div></div> 
          <div><Typography variant="h5" className={classes.subheadtitle}>Target</Typography></div> <br/> 
          
        </div>

        <div><Typography variant="body1" color="textSecondary" className={classes.subheadaddress}>Cham Towers, Plot 12, Nkruma Rd, Kampala, Ug</Typography></div>
        <div className={classes.navitems}>
          <div className={classes.nav}>
            <Badge color="secondary" badgeContent={cart}>
              <Link href='/bag'>
                <ShoppingBasketOutlinedIcon fontSize="large" style={{color:'grey',cursor:'pointer'}}/>
              </Link>
            </Badge>
            <Link href='/bag'>
              <Typography className={classes.navtext} variant="h6" color="textSecondary">Bag</Typography>
            </Link>
            <div className={classes.accounticon}>
              <PersonOutlineOutlinedIcon fontSize="large" style={{color:'grey'}}/>
            </div>
            <Typography className={classes.navtext} variant="h6" color="textSecondary">Account</Typography>
        </div>
        </div>
      </Box>
    </div>
  );
}
