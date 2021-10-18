import React from 'react';
import '../static/css/hostlist.css';
import {List, ListItem, ListItemText} from '@material-ui/core/';
export default function HostList(props) {
    const hostList = props.data;

    function handlerClick(e, id) {
        e.preventDefault();
        props.select(id);
        return null;
    }

    return (
        <div className="HostList_frame">
            <h2>
                <div className="HostList_text">
                    Host List
                </div>
            </h2>

            <List>
            {hostList.map((host)=>
                <ListItem button key={host.id}>
                    <ListItemText onClick={(e) => handlerClick(e, host.id)}>{host.name}</ListItemText>
                </ListItem>
            )}
            </List>
        </div>
    )
}
