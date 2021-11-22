import React from 'react';
import '../static/css/hostlist.css';
import {List, ListItem, ListItemText} from '@material-ui/core/';
export default function HostList(props) {
    const hostList = props.data;

    function handlerClick(e, id) {
        e.preventDefault();
        props.select(id);
        console.log(id)
        return null;
    }

    return (
        <div className="HostList_frame">
            <h2 className="HostList_text">
                Host List
            </h2>

            <List>
            {hostList.map((host)=>
                <ListItem button key={host.id}>
                    <ListItemText onClick={(e) => handlerClick(e, host.ID)}>{host.HostName}</ListItemText>
                </ListItem>
            )}
            </List>
        </div>
    )
}
