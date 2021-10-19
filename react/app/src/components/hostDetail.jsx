import {Box, Grid} from '@material-ui/core/';
import '../static/css/hostlist.css';
import { makeStyles } from "@material-ui/styles";
import Tachometer from './tachometer';


const useStyle = makeStyles ({
    grid: {
    },
    item: {
      /*border: '1px solid lightblue',*/
  },
})

export default function HostDetail(props) {
    const classes = useStyle();

    return (
        <Grid item md={6} xs={12} className={classes.item}>
            <div className="youso">
                <p>{props.text}</p>
                <Tachometer />
            </div>
        </Grid>
    )
}