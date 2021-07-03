import logo from './logo.svg';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, Grid, Typography, Paper, Avatar } from '@material-ui/core';
import './App.css';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#382E61", 
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    width: '90%',
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
        style={{ minHeight: '100vh' }}
        >
        <Paper className={classes.paper}>
          <Grid direction="column" spacing={2} alignItems="flex-start" item xs={12}>
            <Typography variant="h6" >2020-2021</Typography>
            <Grid container direction="row" justify="center" alignItems="center" spacing={2}>
              
              <Grid item>
                <Avatar>W</Avatar>
              </Grid>
              <Grid item>
                <Typography >This is my WIP GH page</Typography>
              </Grid>
              <Grid item>
                <Typography color="textSecondary" variant="subtitle1">2020-2021</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </div>
  )
}

export default App
