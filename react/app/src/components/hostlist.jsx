import React,{useState} from 'react';
import '../static/css/figma.css';
import {Grid,Box,Button, List, ListItem, ListItemText} from '@material-ui/core/';
export default function HostList(props) {
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

            <List>
            {hostList.map((host)=>
                <HostList_item name={host.name}/>
            )}
            </List>
        
            </Box>
        </div>
    )
}

function HostList_item(props) {
    function checkProps(e) {
        e.preventDefault();
        alert("a");
        console.log('You clicked submit.');
    }
    return (
        <ListItem  button>
                    <ListItemText>{props.name}</ListItemText>
        </ListItem>
    )
}