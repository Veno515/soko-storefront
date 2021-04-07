import React from 'react';
import Box from '@material-ui/core/Box';
import StorefrontIcon from '@material-ui/icons/Storefront';
import { Badge, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';
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
    backgroundColor: 'lightGrey',
    borderRadius: '100%',
    height:'60px',
    width: '60px',
    position: 'relative',
  },
  storefrontimage: {
   position: 'absolute',
   top: '50%',
   left: '50%',
   marginRight: '-50%',
   transform: 'translate(-50%, -50%)',
  },
  subheadaddress: {
    marginLeft: '90px',
    marginTop: '-20px',
    fontWeight: 'bold',
  },
  subheadbox: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    height: '146px',
    
  },
  navitems: {
    float: 'right',
    marginTop: '-48px',
    paddingRight: '192px'
  }
}));

export default function Target() {
  const classes = useStyles();

  const {cart,setCart} = useCart();

  console.log(cart);

  // setTimeout(() => {
  //   setCart(cart++)
  // console.log(cart);

  // }, 2000);

  return (
    <div>
      <Box className={classes.subheadbox} component="span" display="block" p={1} m={1} pt={3} pl={25} bgcolor="background.paper">
        <div className={classes.subheadrow}>
          <div className={classes.storefronticon}><img className={classes.storefrontimage} src="/storefront.png" alt="storefront"></img></div> 
          <div><Typography variant="h5" className={classes.subheadtitle}>Target</Typography></div> <br/> 
          
        </div>

        <div><Typography variant="body1" color="textSecondary" className={classes.subheadaddress}>Cham Towers, Plot 12, Nkruma Rd, Kampala, UG</Typography></div>
        <div className={classes.navitems}>
        <Box component="span">
          <Badge color="secondary" badgeContent={cart}>
            <ShoppingBasketOutlinedIcon fontSize="large" style={{color:'grey'}}/>
          </Badge>
        </Box>
        </div>
      </Box>
    </div>
  );
}
