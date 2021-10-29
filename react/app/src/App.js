import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './static/css/App.css';
import Header from './components/header'; 
import HostList from './components/hostlist';
import HostDetail from './components/hostDetail';
import {Grid,Box, Paper} from '@material-ui/core/';
import Tachometer from './components/tachometer';

function App() {
  // HostName
  const [hostList, setHostList] = useState([{id: 1, name: "test"},{id: 2, name: "test2"}])

  // 選択したList
  const [selectList, setSelectList] = useState();

  const [TachoMeter, setTachoMeter] = useState();

  const [test, setTest] = useState(0);

const log = function(){
  const date1 = new Date();
  const date2 = date1.getSeconds() + "秒"
  setTest(date2)
};

setInterval(log, 1000);

  return (
    <React.Fragment>
          <Header />
          {test}
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
