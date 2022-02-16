import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import AssignmentIcon from '@mui/icons-material/Assignment';
import {AccessTime, History, Home, Subscriptions, ThumbUp, VideoLibrary} from "@mui/icons-material";

export const mainListItems = (
    <div>
        <ListItem button>
            <ListItemIcon>
                <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <History />
            </ListItemIcon>
            <ListItemText primary="History" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <Subscriptions />
            </ListItemIcon>
            <ListItemText primary="Subscriptions" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <VideoLibrary />
            </ListItemIcon>
            <ListItemText primary="Your Videos" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <ThumbUp />
            </ListItemIcon>
            <ListItemText primary="Liked Videos" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <AccessTime />
            </ListItemIcon>
            <ListItemText primary="Watch Later" />
        </ListItem>
    </div>
);

export const secondaryListItems = (
    <div>
        <ListSubheader inset>Saved reports</ListSubheader>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Current month" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Last quarter" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Year-end sale" />
        </ListItem>
    </div>
);