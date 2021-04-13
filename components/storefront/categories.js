import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {Grid }from '@material-ui/core';
import Box from "@material-ui/core/Box";
import SokoStoreFront from '../storefront/layout';
import Footer from '../footer';
import Search from '../storefront/searchproducts';

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
        <Box mt={14} ml={8}>
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
 
}));




export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item lg={3} md={3} sm={12} xs={12}>
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
            <Tab className={classes.tab} label="Electronics (12)" {...a11yProps(0)} />
            <Tab className={classes.tab} label="Face Masks (3)" {...a11yProps(1)} />
            <Tab className={classes.tab} label="Fresh Food (8)" {...a11yProps(2)} />
            <Tab className={classes.tab} label="Grocery (6)" {...a11yProps(3)} />
            <Tab className={classes.tab} label="Home (24)" {...a11yProps(4)} />
            <Tab className={classes.tab} label="Kids (9)" {...a11yProps(5)} />
            <Tab className={classes.tab} color="primary" style={{color: '#1569C8', fontWeight: 'bold'}} label="View all categories  >" {...a11yProps(6)}></Tab> 
          </Tabs>
          </Grid>
          <Grid item lg={8} md={3} sm={12} xs={12}>
          <TabPanel value={value} index={0}>
            <SokoStoreFront/>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <div className={classes.searchbar}>
              <Search/>
            </div>
            Face Masks
          </TabPanel>
          <TabPanel value={value} index={2}>
            <div className={classes.searchbar}>
              <Search/>
            </div>
            Fresh Food
          </TabPanel>
          <TabPanel value={value} index={3}>
            <div className={classes.searchbar}>
              <Search/>
            </div>
            Grocery
          </TabPanel>
          <TabPanel value={value} index={4}>
            <div className={classes.searchbar}>
              <Search/>
            </div>
            Home
          </TabPanel>
          <TabPanel value={value} index={5}>
            <div className={classes.searchbar}>
              <Search/>
            </div>
            Kids
          </TabPanel>
          <TabPanel value={value} index={6}>
            All categories
          </TabPanel>
          </Grid>
          <Grid item md={12}>
            <Footer/>
          </Grid>
          </Grid>
        </div>
       </>
  );
}

