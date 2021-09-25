import React from 'react';
import '../static/css/header.css';
import Icon from '../static/img/RasScreenIcon/logo_R.jpg';
import Image from'react-image-resizer';
import {Grid, Box} from '@material-ui/core/';
import { makeStyles } from '@material-ui/styles';


export default function Header(){
    const Style = {
        Image: {
            
        }
    }
    return(
        <Grid container className="header"　alignItems="center" justify="center">
            <Grid item xs={1}>
                <Box>
                    <Image src={Icon} alt="Logo"
                    height={ 40 }
                    width={ 40 }
                    style = {Style.Image}
                    />
                </Box>
            </Grid>
            <Grid item xs={9}>
            めぬー
            </Grid>
            <Grid item xs={1}>
            <AccessTimeIcon />
            </Grid>
        </Grid>
    )
}