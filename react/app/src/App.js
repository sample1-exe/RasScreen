import './static/css/App.css';
import Header from './components/header'; 
import HostList from './components/hostlist';
import React, { useState, useEffect } from 'react'
import {Grid} from '@material-ui/core/';
import RasTab from './components/tab';

function App() {
  return (
    <React.Fragment>
          <Header />
          <Grid container alignItems="center" justify="center"> 
            <Grid item xs={4}>
              <HostList />

            </Grid>
            <Grid item xs={8}>
              apjd
            </Grid>
          </Grid>
    </React.Fragment>
  );
}

export default App;
