import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { Button } from '@material-ui/core';
import { yellow } from '@material-ui/core/colors';

const styles = {
  root: {
    padding: '0 0 0 4px',
    display: 'flex',
    alignItems: 'center',
    height: '50px',
    backgroundColor: '#F0F0F0',
    width: '100%'
  },
  input: {
    marginLeft: 8,
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4,
  },
  searchbtn: {
      backgroundColor: yellow[400],
      height: '50px',
      width: '15px',
      marginRight: '-10px',
  }
};

function CustomizedInputBase(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root} elevation={0}>
      <InputBase className={classes.input} placeholder="Search for products..." />
      <IconButton className={classes.iconButton} aria-label="Search">
        <Button className={classes.searchbtn}><SearchIcon color="primary"/></Button>
      </IconButton>
    </Paper>
  );
}

CustomizedInputBase.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedInputBase);