import React from 'react';
import '../static/css/header.css';
import '../static/css/figma.css';
import Icon from '../static/img/RasScreenIcon/logo_R.jpg';
import Image from'react-image-resizer';
import {Grid, Box} from '@material-ui/core/';
import {AppBar, Typography, Drawer, Button, Toolbar, IconButton, List,ListItem, Divider, ListItemIcon, ListItemText} from '@material-ui/core/';


export default function Header(){
    const style = {
        image: {
            margin: "0 auto"
        },
      };
    return(
        <Grid container className="header"　alignItems="center" justify="center">
            <Grid item xs={1}>
                <Image src={Icon} alt="Logo"
                height={ 40 }
                width={ 40 }
                style = {style.image}
                />
            </Grid>
            <Grid item xs={11} >
                <Button color="inherit">Dashbourd</Button>
                <Button color="inherit">MAP</Button>
                <Button color="inherit">LOGS</Button>
            </Grid>
        </Grid>
    )
}
