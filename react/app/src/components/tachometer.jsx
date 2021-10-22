import { Chart } from "react-google-charts";
import {Grid, Box} from '@material-ui/core/';
import '../static/css/tachometer.css';

export default function Tachometer(props) {
    return (
        <div>
            <Grid item xs={12}>
            <Chart 
                chartType="Gauge"
                width="auto"
                loader={<div>Loading Chart</div>}
                data={[
                    ['Label', 'Value'],
                    ['Network', 80],
                    ]}
                options={{
                redFrom: 90,
                redTo: 100,
                yellowFrom: 75,
                yellowTo: 90,
                minorTicks: 5,
                }}
                className="tachometer"
            />
            </Grid>
            <Grid container>
            <Grid item xs={6}>
                <Chart 
                    chartType="Gauge"
                    width="auto"
                    loader={<div>Loading Chart</div>}
                    data={[
                        ['Label', 'Value'],
                        ['Memory', 100],
                        ]}
                    options={{
                    redFrom: 90,
                    redTo: 100,
                    yellowFrom: 75,
                    yellowTo: 90,
                    minorTicks: 5,
                    }}
                    className="tachometer"
                />
            </Grid>
            <Grid item xs={6}>
                <Chart 
                    chartType="Gauge"
                    width="auto"
                    loader={<div>Loading Chart</div>}
                    data={[
                        ['Label', 'Value'],
                        ['CPU', 40],
                        ]}
                    options={{
                    redFrom: 90,
                    redTo: 100,
                    yellowFrom: 75,
                    yellowTo: 90,
                    minorTicks: 5,
                    }}
                    className="tachometer"
                />
            </Grid>
            </Grid>
            
        </div>
    )
}