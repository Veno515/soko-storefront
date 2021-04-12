import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {Badge, ButtonGroup, Grid }from '@material-ui/core';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Link from 'next/link';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { yellow } from '@material-ui/core/colors';
import Footer from '../components/footer';
import { useCart } from '../hooks/useCart';
import Carousel from '../components/carousel';
import Index from "./simplecarousel";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      '/stool.jpg',
  },
  {
    label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1582389450817-001a3aaff60b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OTV8fHdvb2RlbiUyMHN0b29sfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.unsplash.com/photo-1584914185960-534b55f4ac50?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
  },
  {
    label: 'NeONBRAND Digital Marketing, Las Vegas, United States',
    imgPath:
      'https://images.unsplash.com/photo-1580479929210-07eae66cf997?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
  },
];


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 50,
    justifyContent: 'center'
  },
  heading: {
      display: 'flex',
      flexDirection: 'row',
      marginTop: theme.spacing(0),
      paddingLeft: theme.spacing(1)
  },
  headingtext: {
    fontWeight: 'bold',
    paddingLeft: theme.spacing(3),
    paddingTop: theme.spacing(0.5)
  },
  tabs: {
    // borderRight: `1px solid ${theme.palette.divider}`,
    height: '450px', 
    marginTop: '20px',
  },
  tab: {
    paddingRight: '100px',
  },
  cart: {
      paddingLeft: theme.spacing(1),
      marginTop: theme.spacing(0),
      outline: '1px solid black',
      textAlign: 'center',
  },
  searchbar: {
    top: '190px',
    position: 'absolute',
    left: '31%',
    right: '32%',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: '500px',
    display: 'block',
    overflow: 'hidden',
    width: '100%',
    borderRadius: '2%',
  },
  productName: {
      fontWeight: 'bold'
  },
  productdetailcontainer: {
      padding: theme.spacing(2),
      marginTop: theme.spacing(6)
  },
  productdescription: {
    paddingTop: theme.spacing(3),
  },
  price: {
      paddingTop: theme.spacing(5)
  },
  discount: {
    borderRadius: '5px',
    width: '30px',
    marginTop: theme.spacing(6),
  },
  discountpercent: {
    color: 'white',
    fontWeight: 'bold',
    // border: '10px solid red',
    marginTop: theme.spacing(20),
    marginLeft: theme.spacing(3),
    // width: 50,
    // backgroundColor:'red'
  },
  buttongroup: {
    marginLeft: theme.spacing(3),
    outline: '1px solid #1569C8'  
  },
  initialprice: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid'
  },
  priceanddiscount: {
      display: 'flex',
      flexDirection: 'row',
  },
  productctabuttons: {
    margin: theme.spacing(1),
    paddingTop: theme.spacing(10)
  },
  addtobagbutton: {
    marginLeft: theme.spacing(1),
    border: '2px solid',
    minWidth: 250,
    minHeight: 50,
  },
  buynowbutton: {
    marginLeft: theme.spacing(4),
    minWidth: 250,
    minHeight: 50,
    backgroundColor: '#FADC5B',
    [theme.breakpoints.down('sm')]: {
      marginLeft: theme.spacing(1), 
      marginTop: theme.spacing(2)
    },
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
    minHeight: 30
  },
  setcountcontainer: {
    paddingLeft: theme.spacing(2)
  },
  CTAbuttonstext: {
    fontWeight: 'bold'
  }
}));




export default function ProductDetail() {
    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = tutorialSteps.length;
    const {cart,setCart} = useCart();
    const [count, setCount] = React.useState(1);
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleStepChange = (step) => {
      setActiveStep(step);
    };


  return (
      <div className={classes.root}>
        <Grid container spacing={3}>
            <Grid item lg={12}><div className={classes.heading}><Link href="/"><ChevronLeftIcon fontSize="large" style={{color:'grey', cursor:'pointer'}}/></Link> <Typography className={classes.headingtext} variant="h5">Furniture</Typography></div></Grid>
            <Grid item lg={5} md={5} sm={12} xs={12}>
                <Paper square elevation={0} className={classes.header}>
                </Paper>
                <AutoPlaySwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={activeStep}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
                >
                    {tutorialSteps.map((step, index) => (
                    <div key={step.label}>
                        {Math.abs(activeStep - index) <= 2 ? (
                        <img className={classes.img} src={step.imgPath} alt={step.label} />
                        ) : null}
                    </div>
                    ))}
                    </AutoPlaySwipeableViews>
                    <MobileStepper
                    variant="dots"
                    steps={4}
                    position="static"
                    activeStep={activeStep}
                    className={classes.root}
    //   nextButton={
    //     <Button size="small" onClick={handleNext} disabled={activeStep === 5}>
    //       Next
    //       {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
    //     </Button>
    //   }
    //   backButton={
    //     <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
    //       {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
    //       Back
    //     </Button>
    //   }
    />
                </Grid>
                <Grid item lg={7} md={7} sm={12} xs={12}>
                    <div className={classes.productdetailcontainer}>
                        <Typography className={classes.productName} variant="h6">Norbury Scandinavian Wood Leg Ottoman</Typography>
                        <Typography className={classes.productdescription} color="textSecondary">Lend a fine combination of simple elegance and cool comfort to your living space
                            with this Norbury Scandinavian Wood Leg Ottoman from Project 62?. 
                            Built on a sturdy wooden material for lasting beauty and use, this round ottoman
                            comes with a tufted seat offering a comfy seating experience. This pouf
                            works great as an extra seating option when needed, or it can double as a 
                            cozy footrest when you're looking to put your feet up as you unwind.</Typography>
                        <div className={classes.priceanddiscount}>
                        {!count &&<Typography className={classes.price} variant="h5">UGX 118,400</Typography>}
                        {count &&<Typography className={classes.price} variant="h5">UGX {118400 * count}</Typography> }
                            <Badge badgeContent={'-20%'} color="secondary" className={classes.discount}></Badge> 
                        </div>
                        <Typography className={classes.initialprice} color="textSecondary">UGX 148,000</Typography>
                    </div>
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
                    <div className={classes.productctabuttons}>
                      <Button className={classes.addtobagbutton} size="large" variant="outlined" color="primary" onClick={() => {
                      setCart(cart +1);}}><Typography variant="h6" className={classes.CTAbuttonstext}>Add to Bag</Typography></Button>
                      <Button color="primary" className={classes.buynowbutton}><Typography variant="h6" className={classes.CTAbuttonstext}>Buy Now</Typography></Button>
                    </div>
                </Grid>
                <Grid item lg={12}>
                  <Typography variant="h5" color="textSecondary">RELATED PRODUCTS</Typography>
                  <Index/>
                </Grid>
                <Grid item lg={12} md={12}>
                    <Footer/>
                </Grid>
            </Grid>
        </div>
  );
}

