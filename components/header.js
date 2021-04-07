import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  header: {
    width: '100%',
    color: 'theme.color.primary',
  },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
  title: {
    flexGrow: 1,
    paddingLeft: '192px',
    color: 'theme.color.white',
  },
  logo: {
    marginTop: '10px'
  },

}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.header} position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Store made with <img className={classes.logo} src="/logo.png" alt="Soko Logo" width="3%" height="3%"></img>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
