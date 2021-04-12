import React from 'react';
import { AppBar, Button, Grid, Toolbar, Typography } from '@material-ui/core';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import { makeStyles } from '@material-ui/core/styles';
// import Categories from '../storefront/categories';
// import Category from '../storefront/displaycategory';
// import Bag from '../storefront/bag';

const useStyles = makeStyles((theme) => ({
    root: {
        flex: 1,
    },
    benefitsandfootercontainer: {
        position: 'relative',
        
      },
      benefits: {
        marginTop: theme.spacing(8),
        //  width: '103.4%',
      },
      footercontainer: {
        position: 'relative',
      },
      footer: {
        // position: 'absolute',
        marginTop: theme.spacing(6),
        
        // left: theme.spacing(75),
      }, 
      footertext: {
        fontWeight: 'light',
        textAlign: 'center',
      },
      footertexttwo: {
        fontWeight: 'bold',
        textAlign: 'center',
      },
      footertextaddress:{
        textAlign: 'center',
      },
      whatsapp: {
        backgroundColor: '#25D366',
      },
      whatsappbuttontext: {
        color: "#fff",
        paddingLeft: theme.spacing(2),
        textTransform: 'lowerCase',
        fontWeight: 'bold',
        fontSize: '18px',
      },
      buttoncontainer: {
        textAlign: 'center',
        paddingBottom: theme.spacing(4)
      },
      benefitsimagesone: {
        height: 60,
        width: 75,
        //marginLeft: theme.spacing(79),
        marginTop: theme.spacing(8),
      },
      benefitsimagestwo: {
        height: 65,
        width: 50,
       // marginLeft: theme.spacing(28),
        marginTop: theme.spacing(8),
      },
      benefitsimagesthree: {
        height: 60,
        width: 60,
       // marginLeft: theme.spacing(28),
        marginTop: theme.spacing(8),
      },
      benefittext: {
        color: '#fff',
        marginLeft: theme.spacing(1),
        // marginTop: theme.spacing(1),
        fontSize: '20px'
      },
      benefittexttwo: {
        color: '#fff',
        marginLeft: theme.spacing(1),
        // marginTop: theme.spacing(1),
        fontSize: '20px'
      },
      benefittextthree: {
        color: '#fff',
        marginLeft: theme.spacing(1),
        marginTop: theme.spacing(1),
        fontSize: '20px'
      },
      appbarcontent: {
        flex: '33%',
        // padding: '10px',
        // paddingLeft: '10%',
      },
    
}));

const Footer =() => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.benefitsandfootercontainer}>
            {/* <div className={classes.benefits}>
              <AppBar className={classes.benefitsbar} elevation={0} color="primary" position="static" style={{ height: 230}}>
                <div className={classes.appbarcontent}>
                  <img className={classes.benefitsimagesone} src="/truck.png" alt="Truck"></img>
                  <Typography className={classes.benefittext}>Fast Delivery</Typography>
                </div>
                <div className={classes.appbarcontent}>
                  <img className={classes.benefitsimagestwo} src="/buyerprotection.png" alt="Buyer Protection"></img>
                  <Typography className={classes.benefittexttwo}>Buyer Protection</Typography>
                </div>
                <div className={classes.appbarcontent}>
                  <img className={classes.benefitsimagesthree} src="/24.png" alt="Buyer Protection"></img>
                  <Typography className={classes.benefittextthree}>Customer Support</Typography>
                </div>
              </AppBar>
            </div> */}
             <AppBar position="static" style={{height:250}}>
              <Toolbar>
                 <div className={classes.appbarcontent}>
                  <img className={classes.benefitsimagesone} src="/truck.png" alt="Truck"></img>
                  <Typography className={classes.benefittext}>Fast Delivery</Typography>
                </div>
                <div className={classes.appbarcontent}>
                  <img className={classes.benefitsimagestwo} src="/buyerprotection.png" alt="Buyer Protection"></img>
                  <Typography className={classes.benefittexttwo}>Buyer Protection</Typography>
                </div>
                <div className={classes.appbarcontent}>
                  <img className={classes.benefitsimagesthree} src="/24.png" alt="Buyer Protection"></img>
                  <Typography className={classes.benefittextthree}>Customer Support</Typography>
                </div>
              </Toolbar>
            </AppBar>
            <div className={classes.footercontainer}>
              <div className={classes.footer}>
                <Typography color="textSecondary" className={classes.footertext}>STORE DETAILS</Typography> <br/>
                <Typography variant="h5" className={classes.footertexttwo}>Target</Typography>
                <Typography color="textSecondary" className={classes.footertextaddress}>Cham Towers, Plot 12 Nkruma Rd, Kampala, Ug</Typography> <br/>
                <div className={classes.buttoncontainer}>
                 <Button className={classes.whatsapp}><WhatsAppIcon style={{color:'#fff'}}/><Typography variant="body1" className={classes.whatsappbuttontext}> Chat with us</Typography></Button>
                </div>
              </div>
            </div>
         </div>
        </div>
    )
}

export default Footer;