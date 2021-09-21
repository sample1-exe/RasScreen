import './static/css/App.css';
import Header from './components/header'; 
import React, { useState, useEffect } from 'react'
import {Grid} from '@material-ui/core/';


function App() {
  return (
    <React.Fragment>
      <Grid container>
        <Grid item xs={12}>
          <Header  />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default App;
