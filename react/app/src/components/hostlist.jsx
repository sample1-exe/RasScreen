import React,{useState} from 'react';
import '../static/css/hostlist.css';
import {Box, List, ListItem, ListItemText} from '@material-ui/core/';
export default function HostList(props) {
    const hostList = props.data
    return (
        <div className="HostList_frame">
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
        </div>
    )
}

function HostList_item(props) {
    return (
        <ListItem button>
                    <ListItemText>{props.name}</ListItemText>
        </ListItem>
    )
}