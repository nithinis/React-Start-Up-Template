import React, {useEffect} from 'react';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeftRounded';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import {makeStyles} from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

const drawerWidth=250;
const useStyles = makeStyles((theme) => ({
  drawer: {
    flexShrink: 0,
  },
  content: {
    display:'inline-block',
    width:Math.floor(drawerWidth*0.7),
    padding:theme.spacing(1),
  },
  drawerHeader: {
    width:drawerWidth,
    marginTop: theme.spacing(8)
  },
  chevron:{
    backgroundColor: blue[500],
    fill: 'white',
    borderRadius:3
  }
}));

export default function GlobalNavDrawer({isOpen=false, onChange}){
  const styles = useStyles();

  const handleClose = (event)=>{
    if(typeof onChange=== 'function'){
      onChange(false);
    };
  }

  useEffect(()=>{
    console.log('in Drawer', isOpen)
  })
  return (<Drawer anchor="left" variant="persistent" onClose={handleClose} open={isOpen}>
    <div className={styles.drawerHeader}>
      <Typography className={styles.content} component="div" variant="h9">Drawer menu</Typography>
      <IconButton onClick={handleClose}>
        <ChevronLeftIcon className={styles.chevron} />
      </IconButton>
    </div>
    </Drawer>)
}
