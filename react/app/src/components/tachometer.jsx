import { Chart } from "react-google-charts";
import {Grid, Box} from '@material-ui/core/';

export default function Tachometer(props) {
    return (
        <Box >
            <Grid item xs={12}>
            <Chart 
                chartType="Gauge"
                width="70%"
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
            />
            </Grid>
            <Grid item xs={12}>
                <Chart 
                    chartType="Gauge"
                    width="70%"
                    loader={<div>Loading Chart</div>}
                    data={[
                        ['Label', 'Value'],
                        ['Memory', 80],
                        ['CPU', 60],
                        ]}
                    options={{
                    redFrom: 90,
                    redTo: 100,
                    yellowFrom: 75,
                    yellowTo: 90,
                    minorTicks: 5,
                    }}
                />
            </Grid>
        </Box>
    )
}