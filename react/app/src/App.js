import React, { useState, useEffect } from 'react'
import './static/css/App.css';
import Header from './components/header'; 
import HostList from './components/hostlist';
import HostDetail from './components/hostDetail';

import {Grid,Box,Button} from '@material-ui/core/';

function App() {
  // HostName
  const [hostList, setHostList] = useState([{id: 1, name: "test"},{id: 2, name: "test2"}])

  const []


  return (
    <React.Fragment>
          <Header />
          <Grid container> 

            <Grid item lg={2} sm={4}>
              <Box m={2}>
                <HostList data={hostList} />
              </Box>
            </Grid>

            <Grid item lg={4}>
              <HostDetail />
            </Grid>

          </Grid>
    </React.Fragment>
  );
}

export default App;
