import logo from './logo.svg';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, Grid, Typography, Paper } from '@material-ui/core';
import './App.css';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#382E61", 
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

 

function App() {
  const classes = useStyles();

  
  return (
     <div className={classes.root}>
      <Grid container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh' }}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Hi and Welcome!</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>This is my (WIP) GH page</Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default App
