import React from 'react';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { ButtonBase, Divider, Grid, Typography } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const useStyles = makeStyles((theme) => ({
    root: {
    flex: 1,
    },
    heading: {
      fontWeight: 'bold'
    },
    headingcontainer: {
      display: 'flex',
      
    },
    body: {
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(5),
      marginLeft: theme.spacing(30),
      marginRight: theme.spacing(30),
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5),
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
      border: '1px solid lightGrey',
      borderRadius: 15,
      [theme.breakpoints.down('sm')]: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
    },
  },
  desc: {
    marginLeft: theme.spacing(6),
    fontSize: '20px'
  },
  desctwo: {
    fontSize: '20px'
  },
  divider: {
    color: 'lightGrey',
    marginTop: theme.spacing(2),
  },
  selected: {
    color: '#00BB60'
  },
  secondsection: {
    marginTop: theme.spacing(3),
    display: 'flex',
    flexDirection: 'row'
  },
  orderdetails:{
    marginLeft: theme.spacing(2)
  },
  container: {
    paddingTop: theme.spacing(4),
    [theme.breakpoints.down('md')]: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    },
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: '10px',
  },
  numofitems: {
    marginTop: theme.spacing(5)
  },
  badge: {
    backgroundColor: 'lightGrey',
    borderRadius: 5,
    width: 25
  },
  right: {
    float:'right',
    paddingTop: theme.spacing(8)
  },
  boldtext: {
    fontWeight: 'bold',
  },
  phone: {
    paddingTop: theme.spacing(3),
    fontWeight: 'bold',
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
  ];


const TrackOrder = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState('target');
    return (
        <div className={classes.root}>
          <Paper elevation={0}>
            <div className={classes.headingcontainer}>
              <Link href="/"><ArrowBackIosIcon style={{width: '100px', cursor: 'pointer', marginTop:'5px'}}/></Link><Typography className={classes.heading} variant="h5">Order #1233341</Typography>
            </div>
            <div className={classes.body}>
              <FormControl component="fieldset">
                <RadioGroup aria-label="target" name="target" value={value}>
                <FormControlLabel value="target" control={<Radio />} label={<Typography className={classes.orderdetails} variant="h5">Target</Typography>} />
                <Typography className={classes.desc} color="textSecondary">25/02/2021, 01:55pm | 3 items | UGX 1,600</Typography>
                </RadioGroup>
              </FormControl>
              <Divider className={classes.divider}/>
              <div className={classes.secondsection}>
                <CheckCircleIcon fontSize="large" className={classes.selected}/>
                <div className={classes.orderdetails}>
                  <Typography variant="h5">Order Confirmed</Typography>
                  <Typography className={classes.desctwo} color="textSecondary">25/02/2021, 02:15pm</Typography>
                </div>
              </div>
              <Divider className={classes.divider}/>
              <div className={classes.secondsection}>
                <CheckCircleIcon fontSize="large" className={classes.selected}/>
                <div className={classes.orderdetails}>
                  <Typography variant="h5">Shipped</Typography>
                  <Typography className={classes.desctwo} color="textSecondary">04/03/2021, 09:01am</Typography>
                </div>
              </div>
              <Divider className={classes.divider}/>
              <div className={classes.secondsection}>
                <CheckCircleIcon color="disabled" fontSize="large"/>
                <div className={classes.orderdetails}>
                  <Typography variant="h5">Delivered</Typography>
                  <Typography className={classes.desctwo} color="textSecondary">The delivery partner is on his way to deliver your product</Typography>
                </div>
              </div>
              <Divider className={classes.divider}/>

              <Typography className={classes.numofitems} color="textSecondary">2 ITEMS FOUND</Typography>
              {data.map((datum) => (
                <div className={classes.container}>
                <Grid container>
                  <Grid item lg={2}>
                    <ButtonBase className={classes.image}>
                      <img className={classes.img} alt={datum.productname} src={datum.image} />
                    </ButtonBase>
                  </Grid>
                  <Grid item lg={5}>
                    <Typography variant="h6" color="textSecondary">{datum.productname}</Typography>
                    <Typography variant="h6" color="textSecondary">Size: medium  |  color: black</Typography>
                    <Typography><div className={classes.badge}><center>X2</center></div></Typography>
                  </Grid>
                  <Grid item lg={5}>
                    <div className={classes.right}>
                      <Typography variant="h6" color="textSecondary">UGX {datum.price}</Typography>
                    </div>
                  </Grid>
                </Grid>
                </div>
                ))}
               <Divider className={classes.divider}/>
                
                  <div style={{marginTop: '20px'}}>
                    <Grid container>
                      <Grid item lg={6} md={6} sm={6} xs={6}>
                        <Typography className={classes.boldtext}>Total</Typography>
                      </Grid>
                      <Grid item lg={6} md={6} sm={6} xs={6}>
                        <Typography style= {{float: 'right'}} className={classes.boldtext}>UGX 118,400</Typography>
                      </Grid>
                      <Grid item lg={6} md={6} sm={6} xs={6}>
                        <Typography variant="body2" color="textSecondary" style={{marginTop: '5px'}} className={classes.boldtext}><em>Inclusive of all taxes</em></Typography>
                      </Grid>
                    </Grid>
                  </div>
                  <Divider className={classes.divider}/>
                  <Typography color="textSecondary" style={{marginTop: '20px', color: '#03BC33'}} className={classes.boldtext}>You are about to save UGX 10,000 on this order.</Typography>
                  <Divider className={classes.divider}/>
                  <Typography className={classes.numofitems} color="textSecondary">YOUR DELIVERY DETAILS</Typography>
                  <Typography className={classes.boldtext}>Shrey Karah</Typography>
                  <Typography>Cash on delivery</Typography>
                  <Typography className={classes.phone}>+256 76 633 4574</Typography>
                  <Typography>Quench Ville, Plot 12 Nkrumah Rd,</Typography>
                  <Typography>Kampala, Uganda</Typography>
            </div>
          </Paper>
        </div>
    )
};

export default TrackOrder;