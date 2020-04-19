import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display:'flex',
  },
  appBar: {
    zIndex:theme.zIndex.drawer + 1,
  }
}));


export default function GlobalAppBar({onClick}){
  const classes = useStyles();
  return (
    <div className={classes.root}>
    <AppBar className={classes.appBar}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={onClick}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">My Awesome Website</Typography>
      </Toolbar>
    </AppBar>
    <Toolbar />
    </div>
  )
}
