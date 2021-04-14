import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import {Button, Grid }from '@material-ui/core';
import Box from "@material-ui/core/Box";
import Order from '../account/order';
import Addresses from '../../components/account/addresses';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box mt={8} ml={4}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`
  };
}


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    height: '450px', 
    [theme.breakpoints.down('sm')]: {
      height: '250px',
      width: '550px'
    },
    marginTop: '20px',
  },
  tab: {
    paddingRight: '100px',
  },
  searchbar: {
    top: '190px',
    position: 'absolute',
    left: '31%',
    right: '32%',
    [theme.breakpoints.down('sm')]: {
      left: '5%',
      right: '5%',
      top: 730
    }
  },
  body: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(10),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    border: '1px solid lightGrey',
    height: 900,
    borderRadius: 15,
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(0),
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
      height: 1200,
  },
},
logoutbutton: {
  border: '2px solid lightGrey',
  float: 'right',
  marginRight: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
      marginLeft: theme.spacing(5),
  },
},
top: {
  paddingTop: theme.spacing(2),
}
 
}));




export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className={classes.top}>
          <Grid container>
            <Grid item lg={10} md={8} sm={6} xs={8}>
              <Typography variant="h5"><strong>+91-8080021387</strong></Typography>
            </Grid>
            <Grid item lg={2} md={4} sm={6} xs={4}>
            <Button className={classes.logoutbutton} variant="outlined"><strong>Logout</strong></Button>
            </Grid>
        </Grid>
      </div>
      <div className={classes.root}>
        <div className={classes.body}>
          <Grid container spacing={3}>
            <Grid item lg={3}>
              <Tabs
                orientation="vertical"
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                aria-label="Vertical tabs example"
                className={`${classes.tabs} ${classes.indicator}`}
                textColor="primary"
                variant={"scrollable"}
                scrollButtons={"on"}
              >
                <Tab className={classes.tab} label="My Order" {...a11yProps(0)} />
                <Tab className={classes.tab} label="My Addresses" {...a11yProps(1)} />
                </Tabs>
              </Grid>
              <Grid item lg={9}>
                <TabPanel value={value} index={0}>
                  <Order/>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <Addresses/>
                </TabPanel>
              </Grid>
            </Grid>
          </div>
        </div>
       </>
  );
}

