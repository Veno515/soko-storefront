import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { Badge, Button, Grid, Paper, Typography, ButtonBase } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Tooltip from '@material-ui/core/Tooltip';
import Link from 'next/link';
import Search from '../storefront/searchproducts';
import { useCart } from '../../hooks/useCart';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(10),
    }
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
    "@media (width: 414px)": {
      marginLeft: theme.spacing(-45)
    },
    "@media (width: 720px)":{
      marginLeft: theme.spacing(-46)
    },
    "@media (width: 768px)":{
      marginLeft: theme.spacing(-46)
    }
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
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };


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
                    </Grid>
                  </Grid>
                  <Grid item >
                    <Button onClick={() => {
                      setCart(cart +1);
                      handleClick();
                  }} className={classes.addtobagbtn} variant="outlined" color="primary"> 
                      <Tooltip title={<Typography variant="h6">Add to bag</Typography>} aria-label="Add">
                        <Typography className={classes.buttontext}>+ Add</Typography>
                      </Tooltip>
                    </Button>
                    <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
                      <Alert onClose={handleClose} severity="info">
                        <strong>Item added to bag</strong>
                      </Alert>
                    </Snackbar>
                  </Grid>
                </Grid>
              </Grid>
            
          </Paper>
         ))}
        </Grid>
      </Grid>
    </div>
  );
}
