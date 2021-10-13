import {Box,Button} from '@material-ui/core/';
import '../static/css/hostlist.css';

export default function HostDetail(props) {
    const test = props.text
    return (
        <span>
            <Box className="youso">
                {test}
            </Box>
        </span>
    )
}