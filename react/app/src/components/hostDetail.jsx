import {Box, Grid} from '@material-ui/core/';
import '../static/css/hostlist.css';
import { makeStyles } from "@material-ui/styles";
import Tachometer from './tachometer';
import '../static/css/hostlist.css';


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
                <h2 className="HostList_text">
                    Host List
                </h2>
                <p>{props.text}</p>
                <Tachometer />
            </div>
        </Grid>
    )
}