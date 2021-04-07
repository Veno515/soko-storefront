import React from "react";
import PropTypes from "prop-types";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import {Grid }from '@material-ui/core';
import Box from "@material-ui/core/Box";
import SokoStoreFront from '../storefront/layout';
import { blue } from "@material-ui/core/colors";

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

// const theme = createMuiTheme({
//   overrides: {
//     MuiTabs: {
//       // indicator: {
//       //   backgroundColor: orange[700]
//       // }
//       textAlign: 'left',
//       justifyContent: 'left'
//     },
//     MuiTab: {
//       root: {
//           textAlign: 'left',
//           justifyContent: 'left'
//       },
//       selected: {
//         color: blue[700],
//         backgroundColor: blue[100],
//         // "&:hover": {
//         //   backgroundColor: green[100],
//         //   color: green[700]
//         // }
//       }
//     }
//   }
// });


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 224,
  },
  tabs: {
    // borderTop:`1px solid ${theme.palette.divider}` ,
    borderRight: `1px solid ${theme.palette.divider}`,
    height: '450px', 
    // width: '880px',
    marginTop: '20px',
    
  },

  tab: {
    paddingRight: '100px',
  },

  indicator: {
    // backgroundColor: 'lightblue',
  }

}));




export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    // <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item lg={3}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            aria-label="Vertical tabs example"
            className={`${classes.tabs} ${classes.indicator}`}
            
          >
            <Tab className={classes.tab} label="Electronics(12)" {...a11yProps(0)} />
            <Tab className={classes.tab} label="Face Masks" {...a11yProps(1)} />
            <Tab className={classes.tab} label="Item Three" {...a11yProps(2)} />
            <Tab className={classes.tab} label="Item Four" {...a11yProps(3)} />
            <Tab className={classes.tab} label="Item Five" {...a11yProps(4)} />
            <Tab className={classes.tab} label="Item Six" {...a11yProps(5)} />
            <Tab className={classes.tab} label="Item Seven" {...a11yProps(6)} />
          </Tabs>
          </Grid>
          <Grid item lg={6} >
          <TabPanel value={value} index={0}>
            <SokoStoreFront/>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <SokoStoreFront/>
          </TabPanel>
          <TabPanel value={value} index={2}>
            Fresh Food
          </TabPanel>
          <TabPanel value={value} index={3}>
            Grocery
          </TabPanel>
          <TabPanel value={value} index={4}>
            Home
          </TabPanel>
          <TabPanel value={value} index={5}>
            Kids
          </TabPanel>
          <TabPanel value={value} index={6}>
            View all categories
          </TabPanel>
          </Grid>
          </Grid>
      </div>
    // </MuiThemeProvider>
  );
}

