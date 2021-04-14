import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FilterListRoundedIcon from '@material-ui/icons/FilterListRounded';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FiberManualRecordRoundedIcon from '@material-ui/icons/FiberManualRecordRounded';
import Storefront from '@material-ui/icons/Storefront';

const useStyles = makeStyles((theme) => ({
    root: {
        borderLeft: `1px solid ${theme.palette.divider}`,
    },
    filterbutton: {
        border: '2px solid lightGrey',
        float: 'right',
        marginRight: theme.spacing(2),
        [theme.breakpoints.down('sm')]: {
            marginLeft: theme.spacing(5),
        },
    },
    headrow:{
        display: 'flex',
        flexDirection: 'row'
    },
    root: {
        minWidth: 450,
      },
      title: {
        fontSize: 14,
      },
      pos: {
        marginBottom: 12,
      },
      card: {
        display: 'flex',
        flexWrap: 'wrap',
            '& > *': {
            margin: theme.spacing(2),
            width: theme.spacing(16),
            height: theme.spacing(30),
            },
      },
    ordernum: {
        fontWeight: 'bold',
        marginTop: theme.spacing(2),
        paddingLeft: theme.spacing(3),
    },
      right: {
        fontWeight: 'bold',
        float: 'right',
        marginTop: theme.spacing(2),
        paddingRight: theme.spacing(3),     
      },
      orderquantity: {
          paddingLeft: theme.spacing(3),
      },
      orderdate: {
          float:'right',
          paddingRight: theme.spacing(3),
      },
      status: {
          color: '#FF8F54',
          paddingLeft: theme.spacing(2),
          paddingTop: theme.spacing(4)
      },
      statustwo:{
        paddingLeft: theme.spacing(2),
        paddingTop: theme.spacing(4),
        color: '#1569C8', 
      },
      cardtwohead: {
          display: 'flex'
      },
      productname: {
          paddingLeft: theme.spacing(2),
      }
}));

const Order = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState('target');

    return(
        <div className={classes.root}>
            <Grid container>
                <Grid item lg={12}>
                    <div className={classes.headrow}>
                     <Grid container>  
                        <Grid item lg={9} md={9} sm={8} xs={8}>
                            <Typography variant="h5">Showing all orders</Typography>
                        </Grid>
                        <Grid item lg={3} md={3} sm={4} xs={4}>
                            <Button className={classes.filterbutton} variant="outlined"><FilterListRoundedIcon style={{paddingRight:'10px'}}/>Filters</Button>
                        </Grid>
                    </Grid>
                     </div>
                </Grid>
                <div className={classes.card}>
                    <Card className={classes.root} variant="outlined">
                        <CardContent>
                        <FormControl component="fieldset">
                            <RadioGroup aria-label="target" name="target" value={value}>
                            <FormControlLabel value="target" control={<Radio />} label={<Typography className={classes.orderdetails} variant="h5">Target</Typography>} />
                            </RadioGroup>
                            </FormControl>
                        </CardContent>
                       <Grid container>
                           <Grid item lg={8} sm={4} xs={4}>
                                <Typography className={classes.ordernum}>Order#1233341</Typography>
                           </Grid>
                           <Grid item lg={4} sm={8} xs={8}>
                                <Typography className={classes.right}>UGX 12,700</Typography>
                           </Grid>
                       </Grid>
                       <Grid container>
                           <Grid item lg={7} sm={3} xs={3}>
                                <Typography className={classes.orderquantity} color="textSecondary">3 items</Typography>
                           </Grid>
                           <Grid item lg={5} sm={9} xs={9}>
                                <Typography className={classes.orderdate} color="textSecondary">25/02/2021 1:55pm</Typography>
                           </Grid>
                       </Grid>
                       <Typography className={classes.status}><FiberManualRecordRoundedIcon style={{paddingTop: '10px'}}/>  Shipped</Typography>
                    </Card>
                    <Card className={classes.root} variant="outlined">
                        <CardContent>
                            <div className={classes.cardtwohead}>
                                <Storefront color="action" fontSize="large"/>
                                <Typography variant="h5" className={classes.productname}>Abhi's Juke Store</Typography>
                            </div>
                       </CardContent>
                       <Grid container>
                           <Grid item lg={9} sm={4} xs={4}>
                                <Typography className={classes.ordernum}>Order#1233341</Typography>
                           </Grid>
                           <Grid item lg={3} sm={8} xs={8}>
                                <Typography className={classes.right}>UGX 5,400</Typography>
                           </Grid>
                       </Grid>
                       <Grid container>
                           <Grid item lg={7} sm={3} xs={3}>
                                <Typography className={classes.orderquantity} color="textSecondary">1 item</Typography>
                           </Grid>
                           <Grid item lg={5} sm={9} xs={9}>
                                <Typography className={classes.orderdate} color="textSecondary">26/02/2021 1:55pm</Typography>
                           </Grid>
                       </Grid>
                       <Typography className={classes.statustwo}><FiberManualRecordRoundedIcon style={{paddingTop: '10px'}}/>  Delivered</Typography>
                    </Card>
                </div>
            </Grid>
        </div>
    )
};

export default Order;