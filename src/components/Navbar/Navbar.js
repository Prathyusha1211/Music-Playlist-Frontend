import React from "react";
import {AppBar, IconButton, Toolbar, Typography} from '@mui/material'
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
                <QueueMusicIcon/>
            </IconButton>
            </CustomToolbar>
        </AppBar>
        
    );

}
export default Navbar;