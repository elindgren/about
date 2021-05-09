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
    width: "50%",
  },
}));

 

function App() {
  const classes = useStyles();

  
  return (
     <div className="root">
      <div className="MainColumn">
        <div className="SectionCard">
          <Paper className={classes.paper}>
            <Typography>
              Hello and welcome
            </Typography>
          </Paper>
        </div>
      </div>
    </div>
  )
}

export default App
