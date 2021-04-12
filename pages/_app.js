import React from 'react';
import '../styles/globals.css'
import PropTypes from 'prop-types';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../components/header'
import styled from 'styled-components'
import theme from '../src/theme';
import Target from '../components/target';
import { CartProvider } from '../hooks/useCart';

const useStyles = makeStyles((theme) => ({
  body: {
    paddingLeft: theme.spacing(24) ,
    paddingRight: theme.spacing(24) ,
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(2) ,
      paddingRight: theme.spacing(2) ,
    },
    [theme.breakpoints.down('md')]:  {
      paddingLeft: theme.spacing(2) ,
      paddingRight: theme.spacing(2) ,
    },
  },
  
 
}));


function MyApp({ Component, pageProps }) {
  const classes = useStyles();
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <CartProvider>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Header/>
        <Target/>
          <div className={classes.body}>
          <Component {...pageProps} />
          </div>
      </ThemeProvider>
    </CartProvider>
    )
}

export default MyApp
