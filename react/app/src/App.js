import React, { useState } from 'react'
import './static/css/App.css';
import Header from './components/header'; 
import HostList from './components/hostlist';
import HostDetail from './components/hostDetail';
import {Grid,Box, Paper} from '@material-ui/core/';
import { makeStyles } from "@material-ui/styles";


function App() {
  // HostName
  const [hostList, setHostList] = useState([{id: 1, name: "test"},{id: 2, name: "test2"}])

  // 選択したList
  const [selectList, setSelectList] = useState()

  return (
    <React.Fragment>
          <Header />
          <Box mt={4}>
            <Grid container> 
              <Grid item lg={2} sm={3} xs={5}>
                <HostList 
                  data={hostList}
                  select={setSelectList}
                />
              </Grid>

              <Grid item lg={10} sm={9} xs={7}>
                <Grid container alignItems="center" justify="center">
                  <HostDetail 
                    text={selectList}
                  />
                  <HostDetail 
                    text={selectList}
                  />
                  
                </Grid>
              </Grid>
            </Grid>
          </Box>
          
    </React.Fragment>
  );
}

export default App;
