import React from 'react';
import '../static/css/figma.css';
import {Grid,Box,Button, List, ListItem} from '@material-ui/core/';
export default function HostList(props) {

    return (
        <div className="HostList_frame">
            <Box
                component="span"
            >
            <h2>
                <div className="HostList_text">
                    Host List
                </div>
            </h2>
            </Box>
            <Box>
                <List compoent="nav">
                    <ListItem>
                        {props.name}
                    </ListItem>
                    
                </List>
            </Box>
        </div>
    )
}