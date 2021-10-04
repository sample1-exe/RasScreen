import React,{useState} from 'react';
import '../static/css/figma.css';
import {Grid,Box,Button, List, ListItem, ListItemText} from '@material-ui/core/';
export default function HostList() {
    const [hostList, setHostList] = useState([{name: "text", status: "dead"},{name: "text2", status: "arrive"}])
    
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
            
            {hostList.map((host) =>
                <HostList_item 
                name={host.name}
            />)}
            </Box>
        </div>
    )
}

function HostList_item(props) {
    return (
        <div>
            <p>{props.name}</p>
        </div>
    )
}