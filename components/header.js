import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  header: {
    width: '100%',
    color: 'theme.color.primary',
    [theme.breakpoints.up('md')]: {
      width: '100%',
    },
    [theme.breakpoints.up('sm')]: {
      width: '100%',
    },
    
  },

  title: {
    marginLeft: theme.spacing(24),
    color: 'theme.color.white',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(2),
    },
    [theme.breakpoints.up('xs')]: {
      marginLeft: theme.spacing(2),
    },
    [theme.breakpoints.up('md')]: {
      marginLeft: theme.spacing(24),
    },
  },
  logo: {
    marginTop: '10px'
  },

}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item sm={12} md={12}> 
          <AppBar className={classes.header} position="fixed">
            <Toolbar>
              <Typography variant="h6" className={classes.title}>
                Store made with <img className={classes.logo} src="/logo.png" alt="Soko Logo" width="10%" height="10%"></img>
              </Typography>
            </Toolbar>
          </AppBar>
        </Grid>
      </Grid>
    </div>
  );
}
