import './static/css/App.css';
import Header from './components/header'; 
import HostList from './components/hostlist';
import React, { useState, useEffect } from 'react'
import {Grid,Box,Button} from '@material-ui/core/';
import RasTab from './components/tab';

function App() {
  const [hostList, setHostList] = useState([{name: ["test", "test2"]}])
  return (
    <React.Fragment>
          <Header />
          <Grid container alignItems="center" justify="center"> 

            <Grid item xs={2}>
              <Box
                m={2}
              >
              {hostList.map((host) =>
                <HostList 
                  name={host.name}
              />)}
              </Box>
            </Grid>
            <Grid item xs={1}>
            </Grid>
          </Grid>
    </React.Fragment>
  );
}

export default App;
