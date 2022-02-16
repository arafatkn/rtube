import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {
    Dashboard,
    VideoLibrary,
    UploadFileRounded
} from "@mui/icons-material";

export const mainListItems = (
    <div>
        <ListItem button>
            <ListItemIcon>
                <Dashboard />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <VideoLibrary />
            </ListItemIcon>
            <ListItemText primary="Your Videos" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <UploadFileRounded />
            </ListItemIcon>
            <ListItemText primary="Upload Video" />
        </ListItem>
    </div>
);