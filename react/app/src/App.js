import './static/css/App.css';
import Header from './components/header'; 
import HostList from './components/hostlist';
import React, { useState, useEffect } from 'react'
import {Grid,Box,Button} from '@material-ui/core/';
import RasTab from './components/tab';

function App() {
  return (
    <React.Fragment>
          <Header />
          <Grid container alignItems="center" justify="center"> 

            <Grid item xs={2}>
              <Box
                m={2}
              >
                <HostList />
              </Box>
            </Grid>
            <Grid item xs={10}>
              
            </Grid>
          </Grid>
    </React.Fragment>
  );
}

export default App;
