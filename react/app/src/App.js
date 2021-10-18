import React, { useState } from 'react'
import './static/css/App.css';
import Header from './components/header'; 
import HostList from './components/hostlist';
import HostDetail from './components/hostDetail';
import {Grid,Box} from '@material-ui/core/';
import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles ({
  grid: {
  },
  item: {
    padding: '10px',
    border: '1px solid lightblue',
},
})


function App() {
  const classes = useStyle();


  // HostName
  const [hostList, setHostList] = useState([{id: 1, name: "test"},{id: 2, name: "test2"}])

  // 選択したList
  const [selectList, setSelectList] = useState()

  return (
    <React.Fragment>
          <Header />
          <Grid container> 

            <Grid item lg={2} md={4}>
              <Box m={2}>
                <HostList 
                  data={hostList}
                  select={setSelectList}
                />
              
              </Box>
            </Grid>

            <Grid item lg={10} md={8}>
                <Grid container>
                  <Grid item md={6} sm={12} className={classes.grid}>
                    <HostDetail 
                      text={selectList}
                    />
                  </Grid>
                  <Grid item md={6} sm={12} className={classes.grid}>
                    <HostDetail 
                      text={selectList}
                    />
                  </Grid>
                </Grid>
            </Grid>
            <Grid container>
          <Grid item sm={4} md={8} className={classes.item}>Home</Grid>
          <Grid item sm={4} md={2} className={classes.item}>About</Grid>
          <Grid item sm={4} md={2} className={classes.item}>Contact</Grid>
          </Grid>
          </Grid>
          
    </React.Fragment>
  );
}

export default App;
