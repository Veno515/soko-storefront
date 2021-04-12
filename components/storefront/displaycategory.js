import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { Badge, Button, Grid, Paper, Typography, ButtonBase, AppBar } from '@material-ui/core';
import Link from 'next/link';
import Search from '../storefront/searchproducts';
import Bag from '../storefront/bag';
import { useCart } from '../../hooks/useCart';
import Header from '../header';

const useStyles = makeStyles((theme) => ({
  // root: {
  //   borderRight: `1px solid ${theme.palette.divider}`,
  //   marginTop: '-120px',
  // },
  // productimage: {
  //   borderRadius: '10px',
  // },
  // productname: {
  //   fontWeight: 'bold',
  //   // width: '100%',
  // },
  // products: {
  //   display: 'flex',
  //   flexDirection: 'row',
  //   marginLeft: '-7%',
  //   marginTop: '24px',
  //   // width: 950
  // },
  // price: {
  //   marginTop: '-20px',
  // },
  // searchbar: {
  //   top: '190px',
  //   position: 'absolute',
  //   left: '31%',
  //   right: '32%',
  // },
  // addtobagbtn: {
  //   // marginTop: '-40px',
  //   float: 'right',
  //   width: 100,
  //   border: '2px solid',
  //   // position: 'absolute',
  //   // right: 50
  // },
  // btncontainer: {
  //   // paddingLeft: '164%',
  //   // position: 'relative',
  // },

  // categorytitle: {
  //   marginTop: '32px',
  //   marginLeft: '-7%',
  //   fontWeight: 'bold',
  // },
  // categoryquantity: {
  //   backgroundColor: '#1569C8',
  //   borderRadius: '5px',
  //   width: '30px',
  // },
  // num: {
  //   color: 'white',
  //   fontWeight: 'bold',
  // }

  root: {
    flexGrow: 1,
    paddingTop: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(10),
    }
    // borderRight: `1px solid ${theme.palette.divider}`,
  },
  paper: {
    paddingTop: theme.spacing(3),
    marginLeft: -40,
    width: 700,
    [theme.breakpoints.down('sm')]: {
     width: '100%',
     borderBottom: `1px solid ${theme.palette.divider}`,
    }
  },
  image: {
    width: 128,
    height: 128,
    cursor: 'pointer'
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: '10px',
  },
   searchbar: {
    top: '170px',
    position: 'absolute',
    left: '31%',
    right: '32%',
    [theme.breakpoints.down('sm')]: {
      left: '5%',
      right: '5%',
      top: 730
    }
  },
   categorytitle: {
    marginTop: '-88px',
    marginLeft: '-7%',
    fontWeight: 'bold',
  },
  categoryquantity: {
    backgroundColor: '#1569C8',
    borderRadius: '5px',
    width: '30px',
  },
  num: {
    color: 'white',
    fontWeight: 'bold',
  },
  addtobagbtn: {
    marginTop: theme.spacing(10),
    width: 100,
    border: '2px solid',
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(15),
      marginBottom: theme.spacing(3),
      marginLeft: theme.spacing(-40)
    },
    [theme.breakpoints.down('xs')]: {
      marginLeft: theme.spacing(-38)
    },
    "@media (width: 411px)":{
      marginLeft: theme.spacing(-45)
    },
    "@media (width: 768px)":{
      marginLeft: theme.spacing(-46)
    }
    // position: 'absolute',
    // right: 50
  },
  detail: {
    marginTop: theme.spacing(3),
    cursor: 'pointer'
  },
  productname: {
    fontWeight: 'bold'
  },
  buttontext: {
    fontWeight: 'bold'
  },
  footer: {
    marginTop: theme.spacing(100),
  }

}));

const data = [
  {
    image: "/facemask.jpg",
    productname: "Kids' 2pk Clothes Face Mask",
    price: "185,000"
  },
  {
    image: "/stool.jpg",
    productname: "Norbury Scandinavian Wood Leg Ottoman",
    price: "118,400"
  },
  {
    image: "/Baby-carrots.jpeg",
    productname: "Baby-Cut-Carrots-1lb-Good & Gather",
    price: "4,000"
  },
  {
    image: "/wood-bench.jpeg",
    productname: "Metal Country Chalet Charm and Wood Bench- Saracina Home",
    price: "4,000"
  },
  {
    image: "/APG.jpeg",
    productname: "Alternative Protein Ground - 16oz - Good & Gather",
    price: "8,000"
  },
]

export default function Category() {
  const classes = useStyles();
  const {cart,setCart} = useCart();

  return (
    <div className={classes.root}>
      <div className={classes.searchbar}>
        <center><Search/></center>
      </div>
      <Typography className={classes.categorytitle} variant="h5">Electronics <Box component="span"><Badge className={classes.categoryquantity}><Typography className={classes.num}>12</Typography></Badge></Box></Typography>
      <Grid container>
        <Grid item>
        {data.map((filteredDatum) => (
           <Paper elevation={0} className={classes.paper} key={filteredDatum.productname}>
             
              <Grid container spacing={2}>
                <Link href="/[1]">
                  <Grid item>
                    <ButtonBase className={classes.image}>
                      <img className={classes.img} alt={filteredDatum.productname} src={filteredDatum.image} />
                    </ButtonBase>
                  </Grid>
                </Link>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                        {/* <Typography gutterBottom variant="subtitle1">
                          Standard license
                        </Typography> */}
                      <Link href="/[1]">
                        <div className={classes.detail}>
                          <Typography className={classes.productname} gutterBottom>
                            {filteredDatum.productname}
                          </Typography>
                          <Typography variant="body1" color="textSecondary">
                            UGX {filteredDatum.price}
                          </Typography>
                        </div>
                      </Link>
                    </Grid>
                    

                    <Grid item>
                      {/* <Typography variant="body2" style={{ cursor: 'pointer' }}>
                        Remove
                      </Typography> */}
                    </Grid>
                  </Grid>
                  <Grid item >
                    <Button onClick={() => {
                      setCart(cart +1);
              }}  className={classes.addtobagbtn} variant="outlined" color="primary"><Typography className={classes.buttontext}>+ Add</Typography></Button>
                  </Grid>
                </Grid>
              </Grid>
            
          </Paper>
         ))}
        </Grid>
      </Grid>
        
      {/* <div className={classes.footer}>
        <Typography color="textSecondary">STORE DETAILS</Typography>
      </div> */}
    </div>
  );
}
