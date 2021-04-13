import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Badge, Box, Button, ButtonGroup, Divider, Grid, Typography } from "@material-ui/core";
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import { useCart } from '../hooks/useCart';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(3),
        [theme.breakpoints.down('sm')]: {
          marginTop: theme.spacing(25)
        },
        
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
         textDecoration: 'underline',
         cursor: 'pointer'
     },
     bodysection: {
       marginTop: theme.spacing(4),
     },
     boldtext: {
       fontWeight: 'bold',
     },
     bottomspace: {
       marginBottom: theme.spacing(2)
     },
     strikethrough: {
      textDecorationLine: 'line-through',
      textDecorationStyle: 'solid'
     },
     count: {
      textAlign: 'center',
      paddingTop: theme.spacing(1),
      // paddingLeft:theme.spacing(1),
      outline: '1px solid lightBlue',
      maxWidth: 20,
      minWidth: 20,
      maxHeight: 30,
      minHeight: 30
    },
    setcount: {
      border: '1px solid lightBlue',
      maxWidth: 7,
      minWidth: 7,
      maxHeight: 30,
      minHeight: 30,
      backgroundColor:'#E9EFF9'
    },
    setcountcontainer: {
      marginTop: theme.spacing(13),
    },
    dottedborderbottom: {
      borderBottom: `1px dotted ${theme.palette.divider}`,
    }
    }))

const Products = () => {
    const classes = useStyles();
    const {cart,setCart} = useCart();
    const [count, setCount] = React.useState(1);
    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item lg={10} md={10} sm={10} xs={10}>
                  <Typography className={classes.categorytitle} variant="h5">Bag <Box component="span"><Badge className={classes.categoryquantity}><Typography className={classes.num}>{cart}</Typography></Badge></Box></Typography>
                  <div className={classes.bodysection}>
                    <Typography className={classes.boldtext}>Earrings and Mangtikka</Typography>
                    <Typography variant="body2" color="textSecondary" className={classes.bottomspace}> Per piece</Typography>
                   {count && <Typography color="textSecondary" className={classes.boldtext}>UGX {118400 * count}</Typography>}
                   {!count &&<Typography color="textSecondary" className={classes.boldtext}>UGX 118,400</Typography>}
                    <Typography variant="body2" color="textSecondary" className={classes.strikethrough}> UGX 148,000</Typography>
                  </div>
                  <div className={classes.bodysection}>
                        <Typography className={classes.boldtext}>Colorful Earrings Jhumki</Typography>
                        <Typography variant="body2" color="textSecondary" className={classes.bottomspace}> Per piece</Typography>
                      {count && <Typography color="textSecondary" className={classes.boldtext}>UGX {118400 * count}</Typography>}
                      {!count &&<Typography color="textSecondary" className={classes.boldtext}>UGX 118,400</Typography>}
                    </div>
                    <Divider style={{marginTop: '50px'}}/>
                </Grid>
                <Grid item lg={2} md={2} sm={2} xs={2}>
                    <Typography className={classes.clearbagtext} color="textSecondary"  onClick={() => {
                          setCart(0);
                        }}>Clear Bag</Typography>
                    <ButtonGroup className={classes.setcountcontainer}>
                      <Button
                        className={classes.setcount}
                        aria-label="reduce"
                        onClick={() => {
                          setCount(Math.max(count - 1, 0));
                        }}
                      >
                        <RemoveIcon fontSize="small" />
                      </Button>
                      <Typography className={classes.count}>{count}</Typography>
                      <Button
                        className={classes.setcount}
                        aria-label="increase"
                        onClick={() => {
                          setCount(count + 1);
                        }}
                      >
                        <AddIcon fontSize="small" />
                      </Button>
                    </ButtonGroup>
                    <ButtonGroup className={classes.setcountcontainer}>
                      <Button
                        className={classes.setcount}
                        aria-label="reduce"
                        onClick={() => {
                          setCount(Math.max(count - 1, 0));
                        }}
                      >
                        <RemoveIcon fontSize="small" />
                      </Button>
                      <Typography className={classes.count}>{count}</Typography>
                      <Button
                        className={classes.setcount}
                        aria-label="increase"
                        onClick={() => {
                          setCount(count + 1);
                        }}
                      >
                        <AddIcon fontSize="small" />
                      </Button>
                    </ButtonGroup>
                    <Divider style={{marginTop: '42px'}}/>
                </Grid>
                  <Grid item lg={9} md={9} sm={8} xs={8}>
                    <Typography color="textSecondary" style={{marginTop: '20px'}} className={classes.boldtext}>Subtotal</Typography>
                    <Typography color="textSecondary" style={{marginTop: '5px'}} className={classes.boldtext}>Delivery</Typography>
                    <Divider style={{marginTop: '22px'}}/>
                  </Grid>
                  <Grid item lg={3} md={3} sm={4} xs={4}>
                    <Typography color="textSecondary" style={{marginTop: '20px', float: 'right'}} className={classes.boldtext}>UGX 118,400</Typography>
                    <Typography color="textSecondary" style={{marginTop: '5px', float: 'right', color: '#03BC33'}} className={classes.boldtext}>Free</Typography>
                    <Divider style={{marginTop: '95px'}}/>
                  </Grid>

                  <Grid item lg={9} md={9} sm={7} xs={7}>
                    <Typography style={{marginTop: '20px'}} className={classes.boldtext}>Total</Typography>
                    <Typography variant="body2" color="textSecondary" style={{marginTop: '5px'}} className={classes.boldtext}><em>Inclusive of all taxes</em></Typography>
                    <Divider style={{marginTop: '22px'}}/>
                  </Grid>
                  <Grid item lg={3} md={3} sm={5} xs={5}>
                    <Typography style={{marginTop: '20px', float: 'right'}} className={classes.boldtext}>UGX 118,400</Typography>
                    <Divider style={{marginTop: '91px'}}/>
                  </Grid>
                  <Typography color="textSecondary" style={{marginTop: '20px', float: 'right', color: '#03BC33'}} className={classes.boldtext}>You are about to save UGX 10,000 on this order.</Typography>
             </Grid>
        </div>
    )
};

export default Products;