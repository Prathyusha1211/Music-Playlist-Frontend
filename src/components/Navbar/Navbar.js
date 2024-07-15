import React from "react";
import {AppBar, Badge, IconButton, Toolbar, Typography} from '@mui/material'
import QueueMusicIcon from '@mui/icons-material/QueueMusic'
import {styled} from "@mui/material";

const CustomToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
});



const Navbar = () => {

    return(
        <AppBar position="sticky">
            <CustomToolbar>
            <Typography variant="h5">
                Music Playlist
            </Typography>
            <IconButton style={{color:"white"}} data-testid="queue-music-icon">
                <Badge badgeContent={3} data-testid="playlist-count">
                <QueueMusicIcon/>
                </Badge>
                
            </IconButton>
            </CustomToolbar>
        </AppBar>
        
    );

}
export default Navbar;