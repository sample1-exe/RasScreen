import React from 'react';
import '../static/css/header.css';
import Icon from '../static/img/RasScreenIcon/logo_R.jpg';
import Image from'react-image-resizer';
import {Grid, Box} from '@material-ui/core/';
import MenuIcon from '@material-ui/icons/Menu';

export default function Header(){
    const style = {
        image: {
            margin: "0 auto"
        },
      };
    return(
        <div className="header">
            <Grid container alignItems="center" justify="center">
            <Grid item xs={1}>
                <Image src={Icon} alt="Logo"
                height={ 40 }
                width={ 40 }
                style={style.image}
                />
            </Grid>
            <Grid item xs={10}>
            </Grid>
            <Grid item xs={1}>
                <MenuIcon />
            </Grid>
        </Grid>
        </div>
    )
}